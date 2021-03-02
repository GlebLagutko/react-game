var games = [];

export default {
  games() {
    return games
  },
  addGame(user, difficulty, time){
    let game = {
      user: user,
      difficulty: difficulty,
      time: time
    };
    games.push(game)

    return game;
  }

};
