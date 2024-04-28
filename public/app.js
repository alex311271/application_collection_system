const inputEmail = document.querySelector('input[type="email"]')
const inputPassword = document.querySelector('input[type="password"]')
const btn = document.querySelector('button')
inputEmail.focus()

const checkInputEmail = value => {
	if (value.includes('@') && value.includes('.')) {
		return true
	}
	return false
}

inputEmail.onblur = event => {
	const isValid = checkInputEmail(event.target.value)
	const errorEmailInput = document?.querySelector('p')
	get().then(() => {
		if (!isValid) {
			const errorEmailInput = document.createElement('p')
			errorEmailInput.className = 'text-danger'
			errorEmailInput.textContent = 'Введите корректный адрес почты'
			inputEmail.insertAdjacentElement('afterend', errorEmailInput)
			inputEmail.classList.add('border-danger-subtle')
			btn.setAttribute('disabled', 'true')
			console.log(isValid)
		} else if (isValid && errorEmailInput) {
			errorEmailInput?.remove()
			inputEmail.classList?.remove('border-danger-subtle')
			btn?.removeAttribute('disabled')
		}
	})
}

get().then(() => {
	inputEmail.onfocus = () => {
		const errorEmailInput = document?.querySelector('p')
		errorEmailInput?.remove()
		inputEmail.classList?.remove('border-danger-subtle')
		btn?.removeAttribute('disabled')
	}
})

const checkInputPassword = value => {
	const simbolsInclude = /[!@#$%^&*]/

	if (value.match(simbolsInclude) && value.length > 6) {
		return true
	}
	return false
}

inputPassword.onblur = event => {
	const isValid = checkInputPassword(event.target.value)
	const errorMessage = document?.querySelector('p')
	console.log(isValid)
	get().then(() => {
		if (!isValid) {
			const errorMessage = document.createElement('p')
			errorMessage.className = 'text-danger'
			errorMessage.textContent = `Пароль должен содержать символы: ! @ # $ % ^ & * и быть длинее 6 знаков`
			inputPassword.insertAdjacentElement('afterend', errorMessage)
			inputPassword.classList.add('border-danger-subtle')
			btn.setAttribute('disabled', 'true')
		} else if (isValid && errorMessage) {
			btn?.removeAttribute('disabled')
			errorMessage?.remove()
			inputPassword.classList?.remove('border-danger-subtle')
		}
	})
}

get().then(() => {
	inputPassword.onfocus = () => {
		const errorMessage = document?.querySelector('p')
		errorMessage?.remove()
		inputPassword?.classList.remove('border-danger-subtle')
		btn?.removeAttribute('disabled')
	}
})

// /~^$|

async function get() {
	await fetch('/login'), { method: 'GET' }
}
