import Address from "./entity/address"
import Costumer from "./entity/costumer"
import Order from "./entity/order"
import OrderItem from "./entity/order_item"

const costumer = new Costumer("123", "John Doe")
const address = new Address("Main St", 123, "12345", "Anytown")
costumer.address = address
costumer.activate()

const item1 = new OrderItem("1", "Item 1", 100)
const item2 = new OrderItem("2", "Item 2", 200)

const order = new Order("1", "123", [item1, item2])
