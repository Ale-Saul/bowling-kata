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
  const rollSpare = () => {
    game.roll(5);
    game.roll(5);
  }
  const rollStrike = () => {
    game.roll(10);
  }

  it("deberia devolver 0 de la funcion game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });
  it("deberia devolver 20 de la funcion game", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });
  it("deberia devolver el caso especial de 1 spare", () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  }); 
  it("deberia devolver el caso especial de 1 strike", () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });
});
