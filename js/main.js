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
		myList.renderProductImage((myList.products[num].img), j)
		myList.renderProductTitle((myList.products[num].name), j)
		myList.renderProductPrice((myList.products[num].price), j)
		myList.renderProductBtn(j)
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
		btn.addEventListener('click', function () {
			//
		})
	}
}

const myList = new List()

myList.addItem(new Product('Walnut oil', 30, 1, 'images/product1.jpg'))
myList.addItem(new Product('Apricot kernel oil', 25, 1, 'images/product2.jpg'))
myList.addItem(new Product('linseed oil', 15, 1, 'images/product3.jpg'))
myList.addItem(new Product('Cedar oil', 50, 1, 'images/product4.jpg'))

for (let i = 0; i < myList.products.length; i++) {
	myList.renderProduct(i, i)
}

const myCart = new Basket()
myCart.addItem(new Product('Apple', 1, 40))
myCart.addItem(new Product(myList.products[0].name, myList.products[0].price, myList.products[0].qty))
myCart.addItem(new Product(myList.products[1].name, myList.products[1].price, myList.products[1].qty))

let totalPrice = myCart.calcTotalPrice()
myCart.renderTotalPrice(totalPrice)

for (let i = 0; i < myCart.cart.length; i++) {
	myCart.renderBasket((myCart.cart[i].name), (myCart.cart[i].price), (myCart.cart[i].qty), (myCart.cart[i].price) * myCart.cart[i].qty)
}