import Address from "./address"
import Costumer from "./costumer"

describe("Costumer unit test", () => {
	it("should throw error when id is empty", () => {
		expect(() => new Costumer("", "John Doe")).toThrow(
			new Error("Id is required")
		)
	})

	it("should throw error when name is empty", () => {
		expect(() => new Costumer("123", "")).toThrow(new Error("Name is required"))
	})

	it("should change name", () => {
		const costumer = new Costumer("123", "John Doe")
		costumer.changeName("Jane Doe")
		expect(costumer.name).toBe("Jane Doe")
	})

	it("should activate costumer", () => {
		const costumer = new Costumer("123", "John Doe")
		const address = new Address("Main St", 123, "12345", "Anytown")
		costumer.address = address
		costumer.activate()
		expect(costumer.isActive()).toBe(true)
	})

	it("should throw error when address is undefined when activate", () => {
		expect(() => {
			const costumer = new Costumer("123", "John Doe")
			costumer.activate()
		}).toThrow(new Error("Address is mandatory to activate a costumer"))
	})

	it("should deactivate costumer", () => {
		const costumer = new Costumer("123", "John Doe")

		costumer.deactivate()

		expect(costumer.isActive()).toBe(false)
	})
})
