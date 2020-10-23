//@@@ PRODUCT @@@@@@@@@@@@@@@@@@


class Product {
	name = ''
	price = 0
	qty = 0
	img = ''

	constructor(name, price, qty, img) {
		this.name = name
		this.price = price
		this.qty = qty
		this.img = img
	}
}


//@@@ BASKET @@@@@@@@@@@@@@@@@@


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

	renderBasket(name, price, qty, sum) {
		const basket = document.querySelector('.basket__items')
		const newBasket = document.createElement('div')
		newBasket.setAttribute('class', 'basket__item')
		newBasket.innerHTML = `${qty} ${name} for ${price}$ for the amount of ${sum}$`
		basket.appendChild(newBasket)
	}

	renderTotalPrice(num) {
		const basketTotalPrice = document.querySelector('.basket__totalprice')
		const newBasketTotalPrice = document.createElement('div')
		newBasketTotalPrice.setAttribute('class', 'basket__sum')
		newBasketTotalPrice.innerText = num
		basketTotalPrice.appendChild(newBasketTotalPrice)
	}
}

const myCart = new Basket()
myCart.addItem(new Product('Apple', 1, 40))
myCart.addItem(new Product('Apple', 1, 40))

for (let i = 0; i < myCart.cart.length; i++) {
	myCart.renderBasket((myCart.cart[i].name), (myCart.cart[i].price), (myCart.cart[i].qty), (myCart.cart[i].price) * myCart.cart[i].qty)
}

let totalPrice = myCart.calcTotalPrice()
myCart.renderTotalPrice(totalPrice)


//@@@ LIST @@@@@@@@@@@@@@@@@@


class List {
	products = []

	constructor(...items) {
		this.products.push(...items)
	}

	addItem(item) {
		this.products.push(item)
	}

	renderProduct(num) {
		const product = document.querySelector('.main__products')
		const newProduct = document.createElement('a')
		newProduct.setAttribute('class', 'product-item__wrapper product-item__wrapper')
		newProduct.setAttribute('href', '#')
		product.appendChild(newProduct)
		myList.renderProductImage(myList.products[num].img)
		myList.renderProductTitle(myList.products[num].name)
		myList.renderProductPrice(myList.products[num].price)
		myList.renderProductBtn()
	}
	renderProductImage(img) {
		const image = document.querySelector('.product-item__wrapper')
		const newImage = document.createElement('img')
		newImage.setAttribute('class', 'product-item__img')
		newImage.setAttribute('src', img)
		newImage.setAttribute('alt', '')
		image.appendChild(newImage)
	}
	renderProductTitle(text) {
		const title = document.querySelector('.product-item__wrapper')
		const newTitle = document.createElement('h4')
		newTitle.setAttribute('class', 'product-item__title')
		newTitle.innerHTML = text
		title.appendChild(newTitle)
	}
	renderProductPrice(num) {
		const price = document.querySelector('.product-item__wrapper')
		const newPrice = document.createElement('p')
		newPrice.setAttribute('class', 'product-item__price')
		newPrice.innerHTML = `${num}$`
		price.appendChild(newPrice)
	}
	renderProductBtn() {
		const btn = document.querySelector('.product-item__wrapper')
		const newBtn = document.createElement('button')
		newBtn.setAttribute('class', 'product-item__basket')
		newBtn.innerHTML = 'Buy'
		btn.appendChild(newBtn)
	}
}

const myList = new List()

myList.addItem(new Product('Walnut oil', 30, 1, 'images/product1.jpg'))
myList.addItem(new Product('Apricot kernel oil', 25, 1, 'images/product2.jpg'))
myList.addItem(new Product('linseed oil', 15, 1, 'images/product3.jpg'))
myList.addItem(new Product('Cedar oil', 50, 1, 'images/product4.jpg'))

myList.renderProduct(0)
myList.renderProduct(1)

for (let i = 0; i < myList.products.length; i++) {}