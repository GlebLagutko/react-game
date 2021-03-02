import makeExecutable from 'graphql-tools';

import Games from './connectors.js';
import subscr from 'graphql-subscriptions';

const {PubSub, withFilter} = subscr;

const {makeExecutableSchema} = makeExecutable;

const pubsub = new PubSub();

const GAMES_CHANGED_TOPIC = 'games_changed'

const typeDefs = [`
  type Game {
    user: String
    difficulty: String
    time: Int
  }

  type User {
    name: String
  }

  type Query {
    games: [Game]
  }

  type Mutation {
    addGame(user: String!, difficulty: String!, time: Int!): Game
  }

  type Subscription {
    gameAdded: Game
  }

  schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
  }
`];

const resolvers = {
    Query: {
        games(root, {}, context) {
            return Games.games();
        },
    },
    Mutation: {
        addGame: async (root, {user, difficulty, time}, context) => {
            const newGame = await Games.addGame(user, difficulty, time);
            pubsub.publish(GAMES_CHANGED_TOPIC, {gameAdded: newGame});
            return newGame;
        },
    },
    Subscription: {
        gameAdded: {
            subscribe: withFilter(
                () => pubsub.asyncIterator(GAMES_CHANGED_TOPIC),
                (payload, variables) => payload.gameAdded.user === variables.user,
            ),
        }
    },
};

const jsSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

export default jsSchema;
