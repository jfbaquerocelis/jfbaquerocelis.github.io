'use strict'

document.addEventListener('DOMContentLoaded', function () {
	// Vamos a indicar al usuario que tiene la orientación horizontal, rotar su celular para una mejor experiencia de usuario
	if (window.height < 500) alert('Recomendación: Rota tu smartphone para una mejor experiencia.')

	let menuItems = document.querySelectorAll('.menu-list__link')
	let mySelfMenuItems = document.querySelectorAll('.myself__menu__link')
	let btnMenu = document.querySelector('.myself__menu__action')
	let ControlActions = document.querySelector('.control-actions')
	let ControlBtnMenu = document.querySelector('.control-actions__menu')
	let blanketBody = document.querySelector('.blanketBody')
	let containerMenu = document.querySelector('.myself__container__menu')
	let containerMySelf = document.querySelector('.container__myself')
	let portfolioItems = document.querySelectorAll('.portfolio__works__item')
	let works = document.querySelectorAll('.portfolio__works-descriptions__item')

	function ActiveMenuItems (instance, classActive, classMenu) {
		if (!instance.classList.contains(classActive)) {
			let menu = document.querySelectorAll(classMenu)

			menu.forEach(function (item) {
				if (item.hash !== '#home') {
					let article = document.querySelector(item.hash)

					if (item.classList.contains(classActive))
						item.classList.remove(classActive)

					if (article.classList.contains('article--show')) {
						article.classList.remove('article--show')
						article.classList.add('article--hide')
						setTimeout(function () {
							article.style.display = 'none'
						}, 510)
					}
				}
			})
			instance.classList.add(classActive)

			// Vamos a preguntar si el articulo del item al cual estamos dando click ya tiene su articulo activo
			if (!document.querySelector(instance.hash).classList.contains('article--show')) {
				document.querySelector(instance.hash).classList.add('article--show')
				document.querySelector(instance.hash).classList.remove('article--hide')
				setTimeout(() => {
					document.querySelector(instance.hash).style.display = 'flex'
				}, 520)
			}
		}
	}

	menuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault()

			ActiveMenuItems(this, 'menu-list__link--active', '.menu-list__link')
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
				mySelfMenuItems.forEach(function (item) {
					if (item.classList.contains('myself__menu__link--active'))
						item.classList.remove('myself__menu__link--active')
				})
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

				ActiveMenuItems(this, 'myself__menu__link--active', '.myself__menu__link')
			}
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

	// Vamos a recorrer el arreglo de items de trabajos que tenemos en el portafolio para que cuando se de click a alguno de estos items se muestre la información correspondiente
	portfolioItems.forEach(item => {
		item.addEventListener('click', function (e) {
			e.preventDefault()

			// Buscamos si existe un item sin escala de grises
			portfolioItems.forEach(withoutGray => {
				if (withoutGray.classList.contains('portfolio-item--in')) {
					withoutGray.classList.remove('portfolio-item--in')
					withoutGray.classList.add('portfolio-item--out')
				}
			})

			// Validamos si el item que estamos seleccionando se encuentra activo
			if (item.classList.contains('portfolio-item--out')) {
				this.classList.remove('portfolio-item--out')
				this.classList.add('portfolio-item--in')
			}

			// Vamos a mostrar el artículo que corresponde al hash del item
			works.forEach(work => {
				// Si existe un elemento activo, vamos a desactivarlo
				work.classList.remove('portfolio--in')
				work.classList.add('portfolio--out')
				// Después de unos segundos, vamos a activar el que se está seleccionando
				setTimeout(() => {
					work.style.display = 'none'
					if (`#${work.id}` === this.hash) {
						work.classList.remove('portfolio--out')
						work.classList.add('portfolio--in')
						work.style.display = 'block'
					}
				}, 410)
			})
		})
	})
})

// Agregamos el evento de carga de window para esconder el loader una vez se cargue toda la página
window.addEventListener('load', e => {
	let loader = document.querySelector('.loader')
	let message = document.querySelector('.loader__message')

	setTimeout(function () {
		message.textContent = '¡Portafolio Listo!'
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
