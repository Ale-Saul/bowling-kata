import Game from "./bowlingGame.js";

describe("Jugar", () => {
  it("deberia devolver 0 de la funcion game", () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.getScore()).toBe(0);
  });
  it("deberia devolver 20 de la funcion game", () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.getScore()).toBe(20);
  });
});
