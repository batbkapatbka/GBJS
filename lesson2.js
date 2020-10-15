/*
Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
*/

const a = -100 + Math.round(Math.random() * 200),
	b = -100 + Math.round(Math.random() * 200);
console.log(a);
console.log(b);

function addition(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}
if (a >= 0 && b >= 0) {
	console.log(subtraction(a, b));
} else if (a < 0 && b < 0) {
	console.log(multiplication(a, b));
} else {
	console.log(addition(a, b));
}

/*
Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/

const a = Math.round(Math.random() * 15);
console.log(a);
switch (a) {
	case 1:
		console.log(1);
	case 2:
		console.log(2);
	case 3:
		console.log(3);
	case 4:
		console.log(4);
	case 5:
		console.log(5);
	case 6:
		console.log(6);
	case 7:
		console.log(7);
	case 8:
		console.log(8);
	case 9:
		console.log(9);
	case 10:
		console.log(10);
	case 11:
		console.log(11);
	case 12:
		console.log(12);
	case 13:
		console.log(13);
	case 14:
		console.log(14);
	case 15:
		console.log(15);
}

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).
*/

const a = -100 + Math.round(Math.random() * 200),
	b = -100 + Math.round(Math.random() * 200);
console.log(a);
console.log(b);

function addition(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	return a / b;
}

function mathOperation(arg1, arg2, operation) {
	let result;
	switch (operation) {
		case 'addition':
			result = addition(a, b);
			break;
		case 'subtraction':
			result = subtraction(a, b);
			break;
		case 'multiplication':
			result = multiplication(a, b);
			break;
		case 'division':
			result = division(a, b);
	}
	return console.log(result);
}

//mathOperation(a, b, 'addition');
//mathOperation(a, b, 'subtraction');
mathOperation(a, b, 'multiplication');
//mathOperation(a, b, 'division');

/*
 *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
 */

// 1
function power(val, pow) {
	return val ** pow;
}
console.log(power(2, 4));

// 2
function power(val, pow) {
	if (pow === 1) {
		return val;
	} else if (pow <= 0) {
		console.log('Степень может быть только больше 0');
	} else {
		return val * power(val, pow - 1);
	}
}
const result2 = power(2, 0);
if (result2 !== undefined) {
	console.log(result2);
}