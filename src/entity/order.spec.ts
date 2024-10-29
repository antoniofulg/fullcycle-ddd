import Order from "./order"
import OrderItem from "./order_item"

describe("Order unit test", () => {
	it("should throw error when id is empty", () => {
		expect(() => new Order("", "123", [])).toThrow(new Error("Id is required"))
	})

	it("should throw error when costumerId is empty", () => {
		expect(() => new Order("123", "", [])).toThrow(
			new Error("CostumerId is required")
		)
	})

	it("should throw error when items quantity is 0", () => {
		expect(() => new Order("123", "123", [])).toThrow(
			new Error("Items are required")
		)
	})

	it("should calculate total", () => {
		const order = new Order("123", "123", [
			new OrderItem("123", "Item 1", 10),
			new OrderItem("123", "Item 2", 20),
			new OrderItem("123", "Item 3", 30),
		])
		expect(order.total()).toBe(60)
	})
})
