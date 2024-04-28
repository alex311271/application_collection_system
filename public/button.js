const forms = document.querySelector('form')

forms.addEventListener('submit', function () {
	const btn = this.querySelector('button[type=submit]')
	btn.disabled = true
})
