export default class OrderItem {
	private _id: string
	private _name: string
	private _productId: string
	private _price: number
	private _quantity: number

	constructor(
		id: string,
		name: string,
		productId: string,
		price: number,
		quantity: number
	) {
		this._id = id
		this._name = name
		this._productId = productId
		this._price = price
		this._quantity = quantity
	}

	get price(): number {
		return this._price
	}

	get quantity(): number {
		return this._quantity
	}

	orderItemTotal(): number {
		return this._price * this._quantity
	}
}
