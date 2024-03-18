import Game from "./bowlingGame.js";

describe("Jugar", () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  it("deberia devolver 0 de la funcion game", () => {
    rollMany(20, 0);
    expect(game.getScore()).toBe(0);
  });
  it("deberia devolver 20 de la funcion game", () => {
    rollMany(20, 1);
    expect(game.getScore()).toBe(20);
  });
  /* it("deberia devolver el caso especial de 1 spare", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(17, 0);
    expect(game.getScore()).toBe(16);
  }); */
});
