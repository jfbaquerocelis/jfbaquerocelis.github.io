$(document).ready(function () {

	// Cargamos fuentes web con Font Face Observer
	var fontKarla = new FontFaceObserver('Karla')
	var fontMaterial = new FontFaceObserver('Material Icons')

	Promise.all([fontKarla.load(), fontMaterial.load()]).then(function () {
		alert('Fonts Karla and Material Icons available')
	})

	if ($(window).height() < 500){
		alert('Recomendación: Rota tu smartphone para mejor experiencia')
	}

	$('.header__menu-list__link').click(function (e) {
		e.preventDefault()
		var hash = this.hash
		// Creamos un each para quitar clase a cada item antes de pornerla al que se le está dando click
		$('.header__menu-list__link').each(function () {
			$(this).removeClass('header__menu-list__link--active')
		})
		$(this).addClass('header__menu-list__link--active')

		show_hide('.welcome', hash)
		show_hide('.portfolio', hash)
		show_hide('.my-tools', hash)
	})

	// En versión movil, cuando demos click en el icono de menu, mostramos los items de menú
	$('.myself__menu__action, .myself__menu__action--float').click(function () {
		$('.blanketBody').fadeIn('fast')
		$('.myself__container__menu').animate({
			right : 0
		})
	})
	$('.blanketBody').on('click', function () {
		$('.blanketBody').fadeOut('fast')
		$('.myself__container__menu').animate({
			right : '-100%'
		})
	})

	// Creamos los efectos necesarios para el menú de smartphones
	$('.myself__menu__link').click(function (e) {
		e.preventDefault()
		var hash = this.hash

		// Creamos un each para quitar clase a cada item antes de pornerla al que se le está dando click
		$('.myself__menu__link').each(function () {
			$(this).removeClass('myself__menu__link--active')
		})
		$(this).addClass('myself__menu__link--active')

		$('.myself__menu__action--float').fadeOut('fast')

		$('.myself__container__menu').animate({
			right : '-100%'
		})
		$('.blanketBody').fadeOut('slow')

		setTimeout(function () {
			$('.container__articles').show()
			$('body, html').animate({
				scrollTop : $('.container__articles').offset().top
			}, 1000)
		}, 200)
		setTimeout(function () {
			show_hide('.welcome', hash)
			show_hide('.portfolio', hash)
			show_hide('.my-tools', hash)
			$('.myself__menu__action--float').fadeIn('fast')
			$('.container__myself').fadeOut('slow')
		}, 530)
	})

	// Cuando damos click en la imagen, mostramos la información principal del portafolio
	$('.myself__container__menu .myself__logo').click(function () {

		$('.myself__container__menu').animate({
			right : '-100%'
		})
		$('.blanketBody').fadeOut('slow')

		if ($('.container__myself').css('display') === 'none'){
			setTimeout(function () {
				$('.container__articles').hide()
				$('body, html').animate({
					scrollTop : $('.container__myself').offset().top
				}, 1000)
			}, 200)
			setTimeout(function () {
				$('.myself__menu__action--float').fadeOut('fast')
				$('.container__myself').fadeIn('slow')
			}, 530)
		}

	})
})

// Esta función recibe el nombre de cada article para aplicar el efecto de entrada y salida
function show_hide(article, hash) {
	if($(article).hasClass('article--show')){
		$(article).removeClass('article--show')
		$(article).addClass('article--hide')
		setTimeout(function () {
			$(article).css('display', 'none')
		}, 510)
	}
	setTimeout(function () {
		$(hash).addClass('article--show')
		$(hash).css('display', 'flex')
	}, 520)
}