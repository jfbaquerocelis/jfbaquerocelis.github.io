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
		// Fixed contentMenu
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1){
				$('.Header-contentButton').css({
					'position' : 'fixed',
					'width' : '100%',
					'top' : '0',
					'z-index' : '1'
				})
			}else{
				$('.Header-contentButton').css({
					'position' : 'initial',
					'display' : 'block'
				})
			}
		})

		/*Function show Section Menu*/
		$('.Header-menuButton').on('click', function (e) {
			e.preventDefault();
			$('.contentMenu').css('animation-name','showMenu');
			$('.blanketBody').fadeIn('fast');
			$('.contentMenu').css({
				'display' : 'block',
				'height' : '100%'
			});
		})

		/*Function hide Section Menu*/
		$('.blanketBody').on('click', function () {
			$('.contentMenu').css('animation-name','hideMenu');
			setTimeout(function () {
				$('.contentMenu').css('display', 'none');
			}, 600)
			$('.Contact').fadeOut('slow');
			$('.Contact-content').fadeOut('slow');
			$(this).fadeOut('slow');
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
			$(this).css({
				'color' : 'Teal',
				'margin-left' : '10px'
			})
			$('.contentMenu').css('animation-name','hideMenu');
			setTimeout(function () {
				$('.contentMenu').css('display', 'none');
			}, 600)
			$('.blanketBody').fadeOut('fast');
		})
	}
	/*Code Javascript for Tablets*/
	if (window.matchMedia( "(min-width: 700px)" ).matches && window.matchMedia( "(max-width: 999px)" ).matches){
		// Fixed contentMenu
		$(window).scroll(function () {
			if ($(window).scrollTop() > 15){
				$('.contentMenu').css({
					'position' : 'fixed',
					'height' : '56px'
				})
			}else{
				$('.contentMenu').css({
					'position' : 'initial',
					'display' : 'block',
				})
			}
		})

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
			$(this.hash).fadeIn('fast');
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
		// Fixed contentMenu
		$(window).scroll(function () {
			if ($(window).scrollTop() > 15){
				$('.contentMenu').css({
					'position' : 'fixed',
					'height' : '56px'
				})
			}else{
				$('.contentMenu').css({
					'position' : 'initial',
					'display' : 'block',
				})
			}
		})

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
		Fataría agregar trabajos al portafolio y arreglar detallitos como el background de header
		y la foto mía. entre otras cosas que nos vallamos dando cuenta
	*/
})