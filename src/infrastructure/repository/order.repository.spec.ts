import { Sequelize } from "sequelize-typescript"
import CustomerModel from "../db/sequelize/model/customer.model"
describe("Order repository test", () => {
	let sequelize: Sequelize

	beforeEach(async () => {
		sequelize = new Sequelize({
			dialect: "sqlite",
			storage: ":memory:",
			logging: false,
			sync: { force: true },
		})

		await sequelize.addModels([CustomerModel])
		await sequelize.sync()
	})

	afterEach(async () => {
		await sequelize.close()
	})
})
