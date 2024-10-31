import { Sequelize } from "sequelize-typescript"
import Product from "../../domain/entity/product"
import ProductModel from "../db/sequelize/model/product.model"
import ProductRepository from "./product.repository"

describe("Product repository test", () => {
	let sequelize: Sequelize

	beforeEach(async () => {
		sequelize = new Sequelize({
			dialect: "sqlite",
			storage: ":memory:",
			logging: false,
			sync: { force: true },
		})

		sequelize.addModels([ProductModel])

		await sequelize.sync()
	})

	afterEach(async () => {
		await sequelize.close()
	})

	it("should create product", async () => {
		const productRepository = new ProductRepository()
		const product = new Product("123", "Product 1", 10)

		await productRepository.create(product)

		const productModel = await ProductModel.findOne({
			where: { id: product.id },
		})

		expect(productModel).not.toBeNull()
	})

	it("should update product", async () => {
		const productRepository = new ProductRepository()
		const product = new Product("123", "Product 1", 10)

		await productRepository.create(product)

		product.changeName("Product 2")
		product.changePrice(20)

		await productRepository.update(product)

		const productModel = await ProductModel.findOne({
			where: { id: product.id },
		})

		expect(productModel?.name).toBe("Product 2")
		expect(productModel?.price).toBe(20)
	})

	it("should find product", async () => {
		const productRepository = new ProductRepository()
		const product = new Product("123", "Product 1", 10)

		await productRepository.create(product)

		const productFound = await productRepository.find(product.id)

		expect(productFound).not.toBeNull()
		expect(productFound?.id).toBe(product.id)
		expect(productFound?.name).toBe(product.name)
		expect(productFound?.price).toBe(product.price)
	})

	it("should return null when product not found", async () => {
		const productRepository = new ProductRepository()
		const productFound = await productRepository.find("123")

		expect(productFound).toBeNull()
	})

	it("should find all products", async () => {
		const productRepository = new ProductRepository()
		const product1 = new Product("123", "Product 1", 10)
		const product2 = new Product("456", "Product 2", 20)

		await productRepository.create(product1)
		await productRepository.create(product2)

		const products = await productRepository.findAll()

		expect(products).toHaveLength(2)
	})
})
