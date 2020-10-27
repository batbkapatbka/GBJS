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
		this.cart.indexOf(item) >= 0 ? item.qty++ : this.cart.push(item)
	}

	calcTotalPrice() {
		return this.cart.reduce((acc, item) => {
			return acc + item.price * item.qty
		}, 0)
	}

	renderBasket(name, price, qty, sum) {
		const basket = document.querySelector('.basket__items')
		basket.innerHTML = ''
		const newBasket = document.createElement('div')
		newBasket.setAttribute('class', 'basket__item')
		newBasket.innerHTML = `${qty} ${name} for ${price}$ for the amount of ${sum}$`
		basket.appendChild(newBasket)
	}

	renderTotalPrice(num) {
		const basketTotalPrice = document.querySelector('.basket__totalprice')
		basketTotalPrice.innerHTML = ''
		const newBasketTotalPrice = document.createElement('div')
		newBasketTotalPrice.setAttribute('class', 'basket__sum')
		newBasketTotalPrice.innerHTML = `${num}$`
		basketTotalPrice.appendChild(newBasketTotalPrice)
	}

	render() {
		let totalPrice = this.calcTotalPrice()
		this.renderTotalPrice(totalPrice)
		this.cart.forEach(elem => {
			this.renderBasket((elem.name), (elem.price), (elem.qty), (elem.price) * elem.qty)
		})
	}

}


//@@@ LIST @@@@@@@@@@@@@@@@@@


class List {
	products = []

	constructor(...items) {
		this.products.push(...items)
	}

	addItem(item) {
		this.products.push(item)
	}

	renderProduct(num, j) {
		const product = document.querySelector('.main__products')
		const newProduct = document.createElement('a')
		newProduct.setAttribute('class', `product-item__wrapper product-item__wrapper${j}`)
		newProduct.setAttribute('href', '#')
		product.appendChild(newProduct)
		this.renderProductImage((this.products[num].img), j)
		this.renderProductTitle((this.products[num].name), j)
		this.renderProductPrice((this.products[num].price), j)
		this.renderProductBtn(j)
	}
	renderProductImage(img, j) {
		const image = document.querySelector(`.product-item__wrapper${j}`)
		const newImage = document.createElement('img')
		newImage.setAttribute('class', 'product-item__img')
		newImage.setAttribute('src', img)
		newImage.setAttribute('alt', '')
		image.appendChild(newImage)
	}
	renderProductTitle(text, j) {
		const title = document.querySelector(`.product-item__wrapper${j}`)
		const newTitle = document.createElement('h4')
		newTitle.setAttribute('class', 'product-item__title')
		newTitle.innerHTML = text
		title.appendChild(newTitle)
	}
	renderProductPrice(num, j) {
		const price = document.querySelector(`.product-item__wrapper${j}`)
		const newPrice = document.createElement('p')
		newPrice.setAttribute('class', 'product-item__price')
		newPrice.innerHTML = `${num}$`
		price.appendChild(newPrice)
	}
	renderProductBtn(j) {
		const btn = document.querySelector(`.product-item__wrapper${j}`)
		const newBtn = document.createElement('button')
		newBtn.setAttribute('class', 'product-item__basket')
		newBtn.innerHTML = 'Buy'
		btn.appendChild(newBtn)
		newBtn.addEventListener('click', function () {
			event.preventDefault()
			myCart.addItem(myList.products[j])
			myCart.render()
		})
	}
}

const myList = new List()
const myCart = new Basket()

myList.addItem(new Product('Walnut oil', 30, 1, 'images/product1.jpg'))
myList.addItem(new Product('Apricot kernel oil', 25, 1, 'images/product2.jpg'))
myList.addItem(new Product('Linseed oil', 15, 1, 'images/product3.jpg'))
myList.addItem(new Product('Cedar oil', 50, 1, 'images/product4.jpg'))

myList.products.forEach((elem, i) => myList.renderProduct(i, i))