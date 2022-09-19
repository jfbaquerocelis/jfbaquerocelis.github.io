'use strict'

document.addEventListener('DOMContentLoaded', function () {
	// Vamos a indicar al usuario que tiene la orientación horizontal, rotar su celular para una mejor experiencia de usuario
	if (window.height < 500) alert('Recomendación: Rota tu smartphone para una mejor experiencia.')

	// Menu Items
	let menuItems = Array.from(document.querySelectorAll('.menu-list__link')).filter(item => item.hash)
	let mySelfMenuItems = Array.from(document.querySelectorAll('.myself__menu__link')).filter(item => item.hash)
	// Hamburguers
	let btnMenu = document.querySelector('.myself__menu__action')
	let ControlActions = document.querySelector('.control-actions')
	let ControlBtnMenu = document.querySelector('.control-actions__menu')
	// Blanket Body
	let blanketBody = document.querySelector('.blanketBody')
	// Container Menu
	let containerMenu = document.querySelector('.myself__container__menu')
	let containerMySelf = document.querySelector('.container__myself')

	function ActiveMenuItems (classActive, classMenuItem) {
		// Vamos a validar si el item al que se está clickando no está activo
		if (!this.classList.contains(classActive)) {
			// Vamos a obtener un arreglo de items de menú (NodeList -> Array)
			let menu = Array.from(document.querySelectorAll(classMenuItem))
			// Vamos a buscar el item que está seleccionado
			let selectedItem = menu.find(item => item.classList.contains(classActive))

			// Si el item clickado es el inicio
			if (this.hash === '#home') {
				// Buscamos el articulo del item seleccionado
				let selectedArticle = document.querySelector(selectedItem.hash)
				// Y a ambos le quitamos las clases que los hacen visibles
				selectedItem.classList.remove(classActive)
				selectedArticle.classList.remove('article--show')
				selectedArticle.classList.add('article--hide')
				setTimeout(function () {
					selectedArticle.style.display = 'none'
				}, 510)
			} else {
				// En caso contrario, procedemos a hacer lo mismo
				selectedItem.classList.remove(classActive)
				// Pero si el item que está seleccionado es diferente el inicio
				if (selectedItem.hash !== '#home') {
					// Entonces vamos a proceder con ocultar su articulo
					let selectedArticle = document.querySelector(selectedItem.hash)

					selectedArticle.classList.remove('article--show')
					selectedArticle.classList.add('article--hide')
					setTimeout(function () {
						selectedArticle.style.display = 'none'
					}, 510)
				}

				// Por último, capturamos el articulo del item que se está clickando
				let article = document.querySelector(this.hash)
				// Y mostramos el articulo
				article.classList.add('article--show')
				article.classList.remove('article--hide')
				setTimeout(() => {
					article.style.display = 'flex'
				}, 520)
			}
			// Agregamos la clase active al item de menú
			this.classList.add(classActive)
		}
	}

	menuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault()

			ActiveMenuItems.apply(this, ['menu-list__link--active', '.menu-list__link'])
		})
	})

	mySelfMenuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault()

			if (this.hash === '#home') {
				containerMySelf.style.display = "block"
				blanketBody.style.display = "none"
				containerMenu.style.left = "-100%"
				containerMenu.style.transition = "left .5s ease"
				setTimeout(() => {
					containerMySelf.style.opacity = "1"
					ControlActions.style.display = "none"
				}, 1)
			} else {
				blanketBody.style.display = "none"
				containerMenu.style.left = "-100%"
				containerMenu.style.transition = "left .5s ease"
				containerMySelf.style.transition = "opacity .5s ease-in"
				containerMySelf.style.opacity = "0"
				setTimeout(() => {
					containerMySelf.style.display = "none"
					ControlActions.style.display = "flex"
				}, 505)
			}

			ActiveMenuItems.apply(this, ['myself__menu__link--active', '.myself__menu__link'])
		})
	})

	btnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})
	ControlBtnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})

	blanketBody.addEventListener('click', function () {
		blanketBody.style.display = "none"

		containerMenu.style.left = "-100%"
		containerMenu.style.transition = "left .5s ease"
	})
})

// Agregamos el evento de carga de window para esconder el loader una vez se cargue toda la página
window.addEventListener('load', e => {
	let loader = document.querySelector('.loader')
	let message = document.querySelector('.loader__message')

	setTimeout(function () {
		message.textContent = '¡Portfolio loaded successfully!'
		clearTimeout(this)
	}, 1500)

	setTimeout(function () {
		loader.style.transition = 'opacity .8s ease-out'
		loader.style.opacity = '0'
		clearTimeout(this)
	}, 1700)

	setTimeout(function () {
		loader.style.display = 'none'
		clearTimeout(this)
	}, 2500)
})
