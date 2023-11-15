import Cpf from "../src/Cpf"

test("Should validate a cpf", function () {
    const cpf = new Cpf("935.411.347-80")
    expect(cpf).toBeTruthy()
})

test("should try validate a invalid cpf", function () {
  expect(() => new Cpf("123.456.789-10")).toThrow(new Error("Invalid cpf"))
})

test("should try validate a cpf with all digits equal", function () {
  expect(() => new Cpf("111.111.111-11")).toThrow(new Error("Invalid cpf"))
})

test("should try validate a invalid cpf too large", function () {
  expect(() => new Cpf("935.411.347-8000")).toThrow(new Error("Invalid cpf"))
})

test("should try validate a invalid cpf too small", function () {
  expect(() => new Cpf("935.411.347")).toThrow(new Error("Invalid cpf"))
})
