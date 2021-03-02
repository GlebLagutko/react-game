import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {createServer} from 'http';
import graphQl from 'graphql-server-express';

// Subs
import exce from 'graphql'
import subServer from 'subscriptions-transport-ws';

import schema from './schema.js';

const PORT = 3020;
const SUBSCRIPTIONS_PATH = '/subscriptions';
const {graphqlExpress, graphiqlExpress} = graphQl;
const {execute, subscribe} = exce;
const {SubscriptionServer} = subServer;

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/graphql', graphqlExpress({schema}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}));

const server = createServer(app)

server.listen(PORT, () => {
    console.log(`API Server is now running on http://localhost:${PORT}/graphql`)
});

// Subs
SubscriptionServer.create(
    {
        schema,
        execute,
        subscribe,
    },
    {
        server,
        path: SUBSCRIPTIONS_PATH,
    }
);
