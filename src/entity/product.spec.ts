import Product from "./product"

describe("Product unit test", () => {
	it("should throw error when id is empty", () => {
		expect(() => new Product("", "Product 1", 10)).toThrow(
			new Error("Id is required")
		)
	})

	it("should throw error when name is empty", () => {
		expect(() => new Product("123", "", 10)).toThrow(
			new Error("Name is required")
		)
	})

	it("should throw error when price is less than 0", () => {
		expect(() => new Product("123", "Product 1", -1)).toThrow(
			new Error("Price must be equal or greater than 0")
		)
	})

	it("should change name", () => {
		const product = new Product("123", "Product 1", 10)
		product.changeName("Product 2")
		expect(product.name).toBe("Product 2")
	})
})
