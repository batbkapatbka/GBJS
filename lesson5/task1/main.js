function createNewCell(color) {
	const board = document.querySelector('.board')
	const newCell = document.createElement('div')
	newCell.setAttribute('class', `cell-${color}`)
	board.appendChild(newCell)
}

function createNewLineW() {
	for (let i = 0; i < 8; i++) {
		createNewCell(i % 2 ? 'white' : 'black')
	}
}

function createNewLineB() {
	for (let i = 0; i < 8; i++) {
		createNewCell(!(i % 2) ? 'white' : 'black')
	}
}

function createBoard() {
	const start = document.querySelector('.chess')
	start.classList.remove('chess-hidden')
	for (let i = 0; i < 8; i++) {
		i % 2 ? createNewLineW() : createNewLineB()
	}
}
createBoard()

function createNumbers(num, side) {
	const numbers = document.querySelector(`.numbers-${side}`)
	const newNumber = document.createElement('div')
	newNumber.setAttribute('class', `number number-${side}`)
	newNumber.innerText = num
	numbers.appendChild(newNumber)
}

for (let i = 8; i > 0; i--) {
	createNumbers(i, 'left')
	createNumbers(i, 'right')
}

const wordNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function createWords(num, side) {
	const words = document.querySelector(`.words-${side}`)
	const newWord = document.createElement('div')
	newWord.setAttribute('class', `word word-${side}`)
	newWord.innerText = num
	words.appendChild(newWord)
}
for (let i = 0; i <= wordNames.length - 1; i++) {
	createWords(wordNames[i], 'bottom')
	createWords(wordNames[i], 'top')
}