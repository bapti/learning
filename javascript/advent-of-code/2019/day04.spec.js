const {
  validatePassword1,
  validatePassword2,
  numberOfValidPasswords
} = require("./day04");

describe.skip("Day4 part 2", () => {
  it("112233 is valid", () => {
    expect(validatePassword2(112233)).toEqual(true);
  });

  it("111122 is valid", () => {
    expect(validatePassword2(111122)).toEqual(true);
  });

  it("123444 is invalid", () => {
    expect(validatePassword2(123444)).toEqual(false);
  });

  it("should have a 1319 valid passwords", () => {
    expect(numberOfValidPasswords(validatePassword2)).toEqual(1319);
  });
});

describe.skip("Day4 part 1", () => {
  it("111111 is valid", () => {
    expect(validatePassword1(111111)).toEqual(true);
  });

  it("122345 is valid", () => {
    expect(validatePassword1(122345)).toEqual(true);
  });

  it("111123 is valid", () => {
    expect(validatePassword1(111123)).toEqual(true);
  });

  it("223450 is invalid", () => {
    expect(validatePassword1(223450)).toEqual(false);
  });

  it("123789 is invalid", () => {
    expect(validatePassword1(123789)).toEqual(false);
  });

  it("should have a 1955 valid passwords", () => {
    expect(numberOfValidPasswords(validatePassword1)).toEqual(1955);
  });
});
