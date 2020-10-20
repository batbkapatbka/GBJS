/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function transformation(num) {
	let arr = [];
	let obj = {};
	num += '';
	if (num >= 0 && num <= 999) { //Если убрать if будет считать числа любой длины. Как оптимизировать с выводом не придумал.
		for (let i = 0; i < num.length; i++) {
			arr.push(Math.floor(num / (10 ** i) % 10));
		}
	} else {
		console.log('Число превышает 999 либо меньше 0. Введите положительное 3-х значное число');
		return obj;
	}
	obj.единицы = arr[0];
	obj.десятки = arr[1];
	if (obj.десятки === undefined) {
		obj.десятки = 0;
	}
	obj.сотни = arr[2];
	if (obj.сотни === undefined) {
		obj.сотни = 0;
	}
	return obj;
}
console.log(transformation(Math.round(Math.random() * 999)));

/*
Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
Реализуйте такие объекты.
Перенести функционал подсчета корзины на объектно-ориентированную базу.
На дополнительный плюс - реализовать класс корзины. Свойство - сама корзина (массив). Методы - подсчет стоимости, добавление товара в корзину.
*/

const cart = [{
	наименование: 'nokia',
	количество: 5,
	цена: 10,
}, {
	наименование: 'samsung',
	количество: 1,
	цена: 1000,
}, {
	наименование: 'apple',
	количество: 1,
	цена: 2000,
}];

cart.push({
	наименование: 'motorola',
	количество: 3,
	цена: 500,
});

function countBasketPrice(cart) {
	return cart.reduce((accum, item) => accum + item.цена * item.количество, 0);
}

console.log(`В тележке:\n`);
for (let i = 0; i < cart.length; i++) {
	console.log(`   ${cart[i].количество} ${cart[i].наименование} по ${cart[i].цена} Руб.`);
}
console.log(`\nИтого: ${countBasketPrice(cart)} Руб.`);

// C классами что-то ничего не смог придумать в данной ситуации. Как тут они могли бы помочь не пойму.

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
			return acc + item.price
		}, 0)
	}
}

class Item {
	name = ''
	price = 0

	constructor(name, price) {
		this.name = name
		this.price = price
	}
}

const myCart = new Basket(new Item('Computer', 1000), new Item('TV', 300))
myCart.addItem(new Item('Apple', 5))
let totalPrice = myCart.calcTotalPrice()
console.log(totalPrice)