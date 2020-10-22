class Basket {
	cart = []

	constructor(...items) {
		this.cart.push(...items)
	}

	addItem(item) {
		this.cart.push(item)
	}

	calcTotalPrice() {
		return this.cart.reduce((acc, item) => {
			return acc + item.price * item.qty
		}, 0)
	}
}

class Item {
	name = ''
	price = 0
	qty = 0

	constructor(name, price, qty) {
		this.name = name
		this.price = price
		this.qty = qty
	}
}

const myCart = new Basket(new Item('Computer', 1000, 2), new Item('TV', 300, 4))

myCart.addItem(new Item('Apple', 1, 40))

myCart.addItem(new Item('Dog', 5000, 1))

let totalPrice = myCart.calcTotalPrice()

function addBasketQty(num) {
	const basketQty = document.querySelector('.basket__qty')
	const newBasketQty = document.createElement('div')
	newBasketQty.setAttribute('class', 'item')
	newBasketQty.innerText = num
	basketQty.appendChild(newBasketQty)
}
for (let i = 0; i < myCart.cart.length; i++) {
	addBasketQty(myCart.cart[i].qty)
}

function addBasketName(num) {
	const basketName = document.querySelector('.basket__name')
	const newBasketName = document.createElement('div')
	newBasketName.setAttribute('class', 'item')
	newBasketName.innerText = num
	basketName.appendChild(newBasketName)
}
for (let i = 0; i < myCart.cart.length; i++) {
	addBasketName(myCart.cart[i].name)
}

function addBasketPrice(num) {
	const basketPrice = document.querySelector('.basket__price')
	const newBasketPrice = document.createElement('div')
	newBasketPrice.setAttribute('class', 'item')
	newBasketPrice.innerText = num
	basketPrice.appendChild(newBasketPrice)
}
for (let i = 0; i < myCart.cart.length; i++) {
	addBasketPrice(myCart.cart[i].price)
}

function addBasketTotalPrice(num) {
	const basketTotalPrice = document.querySelector('.basket__totalprice')
	const newBasketTotalPrice = document.createElement('div')
	newBasketTotalPrice.setAttribute('class', 'basket__sum')
	newBasketTotalPrice.innerText = num
	basketTotalPrice.appendChild(newBasketTotalPrice)
}
addBasketTotalPrice(totalPrice)
