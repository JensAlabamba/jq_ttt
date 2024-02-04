const View = require("../src/ttt-view"); // require appropriate file
const Game = require("../node_ttt/game"); // require appropriate file
$(() => {
  // Your code here
  const rootEl = $(".ttt");
  const game = new Game();
  new View(game, rootEl);
});
