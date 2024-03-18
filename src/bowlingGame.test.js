import game from "./bowlingGame.js";

describe("Jugar", () => {
  it("deberia devolver 0 de la funcion game", () => {
    expect(game()).toEqual(0);
  });
});
