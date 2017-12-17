document.addEventListener('DOMContentLoaded', function () {
	// Vamos a indicar al usuario que tiene la orientación horizontal, rotar su celular para una mejor experiencia de usuario
	if (window.height < 500) {
		alert('Recomendación: Rota tu smartphone para una mejor experiencia.');
	}

	let menuItems = document.querySelectorAll('.menu-list__link');
	let mySelfMenuItems = document.querySelectorAll('.myself__menu__link');
	let btnMenu = document.querySelector('.myself__menu__action');
	let ControlActions = document.querySelector('.control-actions');
	let ControlBtnHome = document.querySelector('.control-actions__home');
	let ControlBtnMenu = document.querySelector('.control-actions__menu');
	let blanketBody = document.querySelector('.blanketBody');
	let containerMenu = document.querySelector('.myself__container__menu');
	let containerMySelf = document.querySelector('.container__myself');

	function ActiveMenuItems(instance, classActive, classMenu) {
		if (!instance.classList.contains(classActive)) {
			let menu = document.querySelectorAll(classMenu);

			menu.forEach(function (item) {
				let article = document.querySelector(item.hash);

				if (item.classList.contains(classActive))
				item.classList.remove(classActive);

				if (article.classList.contains('article--show')) {
					article.classList.remove('article--show');
					article.classList.add('article--hide');
					setTimeout(function () {
						article.style.display = 'none';
					}, 510)
				}
			});
			instance.classList.add(classActive);

			// Vamos a preguntar si el articulo del item al cual estamos dando click ya tiene su articulo activo
			if (!document.querySelector(instance.hash).classList.contains('article--show')) {
				document.querySelector(instance.hash).classList.add('article--show');
				document.querySelector(instance.hash).classList.remove('article--hide');
				setTimeout(() => {
					document.querySelector(instance.hash).style.display = 'flex';
				}, 520)
			}
		}
	}


	menuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault();

			ActiveMenuItems(this, 'menu-list__link--active', '.menu-list__link');
		});
	});

	mySelfMenuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault();

			blanketBody.style.display = "none";
			containerMenu.style.right = "-100%";
			containerMenu.style.transition = "right .5s ease";
			containerMySelf.style.transition = "opacity .5s ease-in";
			containerMySelf.style.opacity = "0";
			setTimeout(() => {
				containerMySelf.style.display = "none";
				ControlActions.style.display = "flex";
			}, 505);

			ActiveMenuItems(this, 'myself__menu__link--active', '.myself__menu__link');
		});
	});

	btnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block";

		containerMenu.style.right = 0;
		containerMenu.style.transition = "right .5s ease";
	});
	ControlBtnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block";

		containerMenu.style.right = 0;
		containerMenu.style.transition = "right .5s ease";
	});
	ControlBtnHome.addEventListener('click', function () {
		containerMySelf.style.display = "block";
		setTimeout(() => {
			containerMySelf.style.opacity = "1";
			ControlActions.style.display = "none";
		}, 1);
		mySelfMenuItems.forEach(function (item) {
			if (item.classList.contains('myself__menu__link--active'))
				item.classList.remove('myself__menu__link--active');
		});
	});

	blanketBody.addEventListener('click', function () {
		blanketBody.style.display = "none";

		containerMenu.style.right = "-100%";
		containerMenu.style.transition = "right .5s ease";
	});
});

// $(document).ready(function () {
// 	// En versión movil, cuando demos click en el icono de menu, mostramos los items de menú
// 	$('.myself__menu__action, .myself__menu__action--float').click(function () {
// 		$('.blanketBody').fadeIn('fast')
// 		$('.myself__container__menu').animate({
// 			right : 0
// 		})
// 	})
// 	$('.blanketBody').on('click', function () {
// 		$('.blanketBody').fadeOut('fast')
// 		$('.myself__container__menu').animate({
// 			right : '-100%'
// 		})
// 	})
//
// 	// Creamos los efectos necesarios para el menú de smartphones
// 	$('.myself__menu__link').click(function (e) {
// 		e.preventDefault()
// 		var hash = this.hash
//
// 		// Creamos un each para quitar clase a cada item antes de pornerla al que se le está dando click
// 		$('.myself__menu__link').each(function () {
// 			$(this).removeClass('myself__menu__link--active')
// 		})
// 		$(this).addClass('myself__menu__link--active')
//
// 		$('.myself__menu__action--float').fadeOut('fast')
//
// 		$('.myself__container__menu').animate({
// 			right : '-100%'
// 		})
// 		$('.blanketBody').fadeOut('slow')
//
// 		setTimeout(function () {
// 			$('.container__articles').show()
// 			$('body, html').animate({
// 				scrollTop : $('.container__articles').offset().top
// 			}, 1000)
// 		}, 200)
// 		setTimeout(function () {
// 			show_hide('.welcome', hash)
// 			show_hide('.portfolio', hash)
// 			show_hide('.my-tools', hash)
// 			$('.myself__menu__action--float').fadeIn('fast')
// 			$('.container__myself').fadeOut('slow')
// 		}, 530)
// 	})
//
// 	// Cuando damos click en la imagen, mostramos la información principal del portafolio
// 	$('.myself__container__menu .myself__logo').click(function () {
//
// 		$('.myself__container__menu').animate({
// 			right : '-100%'
// 		})
// 		$('.blanketBody').fadeOut('slow')
//
// 		if ($('.container__myself').css('display') === 'none'){
// 			setTimeout(function () {
// 				$('.container__articles').hide()
// 				$('body, html').animate({
// 					scrollTop : $('.container__myself').offset().top
// 				}, 1000)
// 			}, 200)
// 			setTimeout(function () {
// 				$('.myself__menu__action--float').fadeOut('fast')
// 				$('.container__myself').fadeIn('slow')
// 			}, 530)
// 		}
//
// 	})
// })
//
