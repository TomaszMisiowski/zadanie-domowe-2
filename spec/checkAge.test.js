const isAdult = require("../checkAge");

describe("CheckAge", () => {
  it("checks if a person aged 20 is an adult", () => {
    expect(isAdult(20)).toBe(true);
  });

  it("checks if a person aged 16 is an adult", () => {
    expect(isAdult(16)).toBe(false);
  });

  it("checks if a person aged 18 is an adult", () => {
    expect(isAdult(18)).toBe(true);
  });
});
