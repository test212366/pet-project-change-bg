const body = document.body

class ChangeBgColor {
	constructor(btn) {
		this.#setup(btn)
		this.#nation()

	}
	#setup(btn) {
		this.button = document.getElementById(btn)
	}

	changeColor() {
		this.body = document.body
		this.body.classList.toggle('red')

	}



	#nation() {
		this.button.addEventListener('click', this.changeColor)
	}

	deleteElement() {

	}

}


const change = new ChangeBgColor('button')