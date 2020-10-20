function createNewCellW() {
	const board = document.querySelector('.board')
	const newCell = document.createElement('div')
	newCell.setAttribute('class', 'cell-white')
	board.appendChild(newCell)
}

function createNewCellB() {
	const board = document.querySelector('.board')
	const newCell = document.createElement('div')
	newCell.setAttribute('class', 'cell-black')
	board.appendChild(newCell)
}

function createNewLineB() {
	for (let i = 0; i < 8; i++) {
		if (i % 2 === 0) {
			createNewCellB()
		} else createNewCellW()
	}
}

function createNewLineW() {
	for (let i = 0; i < 8; i++) {
		if (i % 2 !== 0) {
			createNewCellB()
		} else createNewCellW()
	}
}

function createBoard() {
	const start = document.querySelector('.chess')
	start.classList.remove('chess-hidden') //Если не подключать мэйн.джиэс чтобы на экране ничего не было
	for (let i = 0; i < 8; i++) {
		if (i % 2 === 0) {
			createNewLineW()
		} else createNewLineB()
	}
}
createBoard()

function createNumbersLeft(num) {
	const numbersLeft = document.querySelector('.numbers-left')
	const newNumberLeft = document.createElement('div')
	newNumberLeft.setAttribute('class', 'number')
	newNumberLeft.innerText = num
	numbersLeft.appendChild(newNumberLeft)
}
for (let i = 8; i > 0; i--) {
	createNumbersLeft(i)
}

function createNumbersRight(num) {
	const numbersRight = document.querySelector('.numbers-right')
	const newNumberRight = document.createElement('div')
	newNumberRight.setAttribute('class', 'number number-right')
	newNumberRight.innerText = num
	numbersRight.appendChild(newNumberRight)
}
for (let i = 8; i > 0; i--) {
	createNumbersRight(i)
}

const wordNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function createWordsTop(num) {
	const wordsTop = document.querySelector('.words-top')
	const newWordTop = document.createElement('div')
	newWordTop.setAttribute('class', 'word-top word')
	newWordTop.innerText = num
	wordsTop.appendChild(newWordTop)
}
for (let i = 0; i <= wordNames.length - 1; i++) {
	createWordsTop(wordNames[i])
}

function createWordsBottom(num) {
	const wordsBottom = document.querySelector('.words-bottom')
	const newWordBottom = document.createElement('div')
	newWordBottom.setAttribute('class', 'word')
	newWordBottom.innerText = num
	wordsBottom.appendChild(newWordBottom)
}
for (let i = 0; i <= wordNames.length - 1; i++) {
	createWordsBottom(wordNames[i])
}

//Не стал делать таблицами тк учили про таблицы забыть