import Coupon from "../src/Coupon"
import Item from "../src/Item"
import Order from "../src/Order"

test("Should create new order with valid CPF", () => {
  const cpf = "953.093.780-65"
  const order = new Order(cpf)
  const total = order.getTotal()
  expect(total).toBe(0)
})

test("Should try create new order with invalid CPF", () => {
  const cpf = "111.111.111-11"
  expect(() => new Order(cpf)).toThrow(new Error("Invalid cpf"))
})

test("Should create new order with 3 items", () => {
  const cpf = "953.093.780-65"
  const order = new Order(cpf)
  order.addItem(new Item(1, "Music", "CD", 30), 3)
  order.addItem(new Item(1, "Movie", "DVD", 50), 1)
  order.addItem(new Item(1, "Movies", "VHS", 20), 2)
  const total = order.getTotal()
  expect(total).toBe(180)
})

test("Should create a new order with 3 items and apply discount coupon", function () {
	const cpf = "839.435.452-10"
	const order = new Order(cpf)
	order.addItem(new Item(1, "Music", "CD", 30), 3)
	order.addItem(new Item(2, "Movie", "DVD", 50), 1)
	order.addItem(new Item(3, "Movies", "VHS", 10), 2)
	order.addCoupon(new Coupon("20OFF", 20))
	const total = order.getTotal()
	expect(total).toBe(128)
})