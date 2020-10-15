/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/

const arr = [];
let i = 1;
while (i < 99) {
	i++;
	let divider = 2;
	while (i % divider !== 0) {
		divider++;
	}
	if (divider === i) {
		arr.push(i);
	}
}
console.log(arr);

/*
С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

const cart = [{
	name: 'nokia',
	price: 10
}, {
	name: 'samsung',
	price: 1000
}, {
	name: 'apple',
	price: 2000
}];
function countBasketPrice(cart) {
	return cart.reduce((accum, item) => accum + item.price, 0);
}
console.log(countBasketPrice(cart));

/*
*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){// здесь пусто}
*/

for (let i = 0; i < 10; console.log(i), i++) {}

/*
*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx
*/

let lines = 0;
while (lines < 20) {
	console.log('x'.repeat(lines + 1));
	lines++;
}