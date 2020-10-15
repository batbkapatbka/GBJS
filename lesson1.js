/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/

let badInput = true;
while (badInput) {
	const celsiusTemp = prompt('Задайте температуру в градусах по Цельсию');
	if (!celsiusTemp || Number.isNaN(+celsiusTemp)) {
		alert('Введите число цифрами');
	} else {
		badInput = false;
		const fahrenheitTemp = (9 / 5) * celsiusTemp + 32;
		alert(`В градусах по Фаренгейту это будет ${fahrenheitTemp}`);
	}
}