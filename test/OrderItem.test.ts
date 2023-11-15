import OrderItem from "../src/OderItem"

test("should create new orderItem", () => {
  const orderItem = new OrderItem(1, 1000, 10)
  expect(orderItem.getTotal()).toBe(10000)
})