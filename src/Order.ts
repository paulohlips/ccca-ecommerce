import Cpf from "./Cpf"
import Item from "./Item"
import OrderItem from "./OderItem"

export default class Oder {
  private cpf: Cpf
  private orderItems: OrderItem[] = []

  constructor (cpf: string) {
   this.cpf = new Cpf(cpf)
  }

  addItem (item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }

  getTotal () {
		let total = 0
		for (const orderItem of this.orderItems) {
			total += orderItem.getTotal()
		}

		return total
  }

}