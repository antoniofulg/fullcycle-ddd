import Order from "./order"
import OrderItem from "./order_item"

describe("Order unit test", () => {
	it("should throw error when id is empty", () => {
		expect(() => new Order("", "123", [])).toThrow(new Error("Id is required"))
	})

	it("should throw error when customerId is empty", () => {
		expect(() => new Order("123", "", [])).toThrow(
			new Error("CustomerId is required")
		)
	})

	it("should throw error when items quantity is 0", () => {
		expect(() => new Order("123", "123", [])).toThrow(
			new Error("Items are required")
		)
	})

	it("should calculate total", () => {
		const order = new Order("123", "123", [
			new OrderItem("123", "Item 1", "123", 10, 2),
			new OrderItem("123", "Item 2", "123", 20, 2),
			new OrderItem("123", "Item 3", "123", 30, 2),
		])
		expect(order.total()).toBe(120)
	})

	it("should throw error if the item quantity is less than 1", () => {
		expect(
			() =>
				new Order("123", "123", [new OrderItem("123", "Item 1", "123", 10, 0)])
		).toThrow(new Error("Quantity must be greater than 0"))
	})
})
