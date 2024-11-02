import { v4 as uuid } from "uuid"
import OrderItem from "../entity/order_item"
import Order from "../entity/order"
import Costumer from "../entity/customer"
export default class OrderService {
	static placeOrder(costumer: Costumer, items: OrderItem[]): Order {
		if (items.length === 0) {
			throw new Error("Order must have at least one item")
		}

		const order = new Order(uuid(), costumer.id, items)

		costumer.addRewardPoints(order.total() / 2)
		return order
	}

	static calculateTotal(orders: Order[]): number {
		return orders.reduce((acc, order) => acc + order.total(), 0)
	}
}
