import Address from "./address"
import Customer from "./customer"

describe("Customer unit test", () => {
	it("should throw error when id is empty", () => {
		expect(() => new Customer("", "John Doe")).toThrow(
			new Error("Id is required")
		)
	})

	it("should throw error when name is empty", () => {
		expect(() => new Customer("123", "")).toThrow(new Error("Name is required"))
	})

	it("should change name", () => {
		const customer = new Customer("123", "John Doe")
		customer.changeName("Jane Doe")
		expect(customer.name).toBe("Jane Doe")
	})

	it("should activate customer", () => {
		const customer = new Customer("123", "John Doe")
		const address = new Address("Main St", 123, "12345", "Anytown")
		customer.address = address
		customer.activate()
		expect(customer.isActive()).toBe(true)
	})

	it("should throw error when address is undefined when activate", () => {
		expect(() => {
			const customer = new Customer("123", "John Doe")
			customer.activate()
		}).toThrow(new Error("Address is mandatory to activate a customer"))
	})

	it("should deactivate customer", () => {
		const customer = new Customer("123", "John Doe")

		customer.deactivate()

		expect(customer.isActive()).toBe(false)
	})

	it("should add reward points", () => {
		const customer = new Customer("123", "John Doe")
		expect(customer.rewardPoints).toBe(0)

		customer.addRewardPoints(10)
		expect(customer.rewardPoints).toBe(10)

		customer.addRewardPoints(10)
		expect(customer.rewardPoints).toBe(20)
	})
})
