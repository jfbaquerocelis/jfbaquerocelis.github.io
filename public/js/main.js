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
	let Bars = document.querySelectorAll('.my-tools__tool__content-bar__bar');

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
			// Para activar la opción de las barras en la sección de herramientas, vamos a decirle a javascript que se active la función cuando se encuentre en la ruta #my-tools
			if (this.hash === "#my-tools") {
				setTimeout(progressBar, 900);
			} else {
				Bars.forEach(bar => bar.style.width = '0');
			}
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

			// Para activar la opción de las barras en la sección de herramientas, vamos a decirle a javascript que se active la función cuando se encuentre en la ruta #my-tools
			if (this.hash === "#my-tools") {
				setTimeout(progressBar, 900);
			} else {
				Bars.forEach(bar => bar.style.width = '0');
			}
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

	// Vamos a crear esta función para animar las barras de cada herramienta de desarrollo en la sección de Herramientas
	function progressBar() {
		let width = 1;
		Bars.forEach(bar => {
			setInterval(function () {
				if (width >= bar.dataset.percent) {
					clearInterval(this);
				} else {
					width++;
					bar.style.backgroundColor = bar.dataset.color;
					bar.style.width = `${width}%`;
				}
			}, 25)
		})
	}
});
