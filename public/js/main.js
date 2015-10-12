$(document).ready(function () {
	if ($(window).height() < 400){
		alert('Recomendación: Rota tu Smartphone para mejor experiencia')
	}
	// Code for text-decoration out in tags "a"
	$('a').click(function () {
		$(this).css('text-decoration', 'none')
	})

	/*Function show Section Contact*/
	$('.Button-contact').on('click', function (e) {
		e.preventDefault();
		setTimeout(function () {
			$('.Contact-content').fadeIn('fast');
		}, 400)
		$('.blanketBody').fadeIn('fast');
		$('.Contact').fadeIn('fast');
	})

	/*Function hide Section Contact*/
	$('.Contact-buttonCancel').on('click', function (e) {
		e.preventDefault();
		$('.Contact').fadeOut('slow');
		$('.Contact-content').fadeOut('slow');
		$('.blanketBody').fadeOut('fast');
	})

	/*Code Javascript for Smartphones*/
	if (window.matchMedia( "(max-width: 699px)" ).matches){
		/*Function show Section Menu*/
		$('.Header-menuButton').on('click', function (e) {
			e.preventDefault();
			// $('.contentMenu').css('animation-name','showMenu');
			$('.contentMenu').addClass('showMenu')
			$('.contentMenu').removeClass('hideMenu')
			$('.blanketBody').fadeIn('fast')
			$('.contentMenu').css('left', '0%')
		})

		/*Function hide Section Menu*/
		$('.blanketBody').on('click', function () {
			if ($('.contentMenu').hasClass('showMenu')){
				$('.contentMenu').removeClass('showMenu')
				$('.contentMenu').addClass('hideMenu')
				$('.contentMenu').css('left', '-100%')
			}
			$('.blanketBody').fadeOut('slow')
			$('.Contact').fadeOut('fast')
			$('.Contact-content').fadeOut('fast')
		})

		/*Function for show Sections according listItems clicked*/
		$('.listMenu li a').on('click', function (e) {
			e.preventDefault();
			$('section').fadeOut('fast');
			$(this.hash).fadeIn('fast');
			$('.listMenu li a').each(function (i) {
				this.style.color = "#333"
				this.style.marginLeft = "0"
			})
			// Agregamos este código para subir el scroll cuando cambiamos de sección
			$('body, html').animate({
				scrollTop : 0
			}, 500)
			$(this).css({
				'color' : 'Teal',
				'margin-left' : '10px'
			})
			$('.contentMenu').removeClass('showMenu')
			$('.contentMenu').addClass('hideMenu')
			$('.contentMenu').css('left', '-100%')
			$('.blanketBody').fadeOut('fast')
		})
	}
	/*Code Javascript for Tablets*/
	if (window.matchMedia( "(min-width: 700px)" ).matches && window.matchMedia( "(max-width: 999px)" ).matches){
		/*Function hide Section Contact*/
		$('.blanketBody').on('click', function () {
			$('.Contact').fadeOut('slow');
			$('.Contact-content').fadeOut('slow');
			$(this).fadeOut('slow');
		})

		/*Function for show Sections according listItems clicked*/
		$('.listMenu li a').on('click', function (e) {
			e.preventDefault();
			$('section').fadeOut('fast');
			$(this.hash).fadeIn('slow');
			$('.listMenu li a').each(function (i) {
				this.style.color = "white"
			})
			$(this).css({
				'color' : '#00E676',
			})
		})
	}

	/*Code Javascript for Desktop*/
	if (window.matchMedia( "(min-width: 1000px)" ).matches){
		/*Function hide Section Contact*/
		$('.blanketBody').on('click', function () {
			$('.Contact').fadeOut('slow');
			$('.Contact-content').fadeOut('slow');
			$(this).fadeOut('slow');
		})

		/*Function for show Sections according listItems clicked*/
		$('.listMenu li a').on('click', function (e) {
			e.preventDefault()
			$('body, html').animate({
				scrollTop : $(this.hash).offset().top - 50
			}, 1000)
			$('.listMenu li a').each(function (i) {
				this.style.color = "white"
			})
			$(this).css({
				'color' : '#00E676',
			})
		})
	}
	/*
		Fataría agregar trabajos al portafolio
	*/
})