import Costumer from "../entity/costumer"
import Order from "../entity/order"
import OrderItem from "../entity/order_item"
import OrderService from "./order.service"

describe("Order service unit test", () => {
	it("should place an order", () => {
		const costumer = new Costumer("1", "Costumer 1")
		const item1 = new OrderItem("1", "Item 1", "123", 100, 2)

		const order = OrderService.placeOrder(costumer, [item1])

		expect(costumer.rewardPoints).toBe(100)
		expect(order.total()).toBe(200)
	})

	it("should calculate total of all orders", () => {
		const order1 = new Order("1", "123", [
			new OrderItem("1", "Item 1", "123", 100, 2),
		])
		const order2 = new Order("2", "123", [
			new OrderItem("2", "Item 2", "123", 200, 2),
		])
		const orders = [order1, order2]
		const total = OrderService.calculateTotal(orders)
		expect(total).toBe(600)
	})
})
