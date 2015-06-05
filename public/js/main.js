$(document).ready(function () {

	// Code for text-decoration out in tags "a"
	$('a').click(function () {
		$(this).css('text-decoration', 'none')
	})

	/*Function show Section Contact*/
	$('.Button-contact').on('click', function (e) {
		setTimeout(function () {
			$('.Contact-content').fadeIn('fast');
		}, 400)
		$('.blanketBody').fadeIn('fast');
		$('.Contact').fadeIn('fast');
		$('body').animate({
			scrollTop : 0
		}, 400)
	})

	/*Function hide Section Contact*/
	$('.Contact-buttonCancel').on('click', function (e) {
		e.preventDefault();
		$('.Contact').fadeOut('slow');
		$('.Contact-content').fadeOut('slow');
		$('.blanketBody').fadeOut('fast');
	})

	/*Function show Section Menu*/
	$('.Header-menuButton').on('click', function (e) {
		e.preventDefault();
		$('.contentMenu').css('animation-name','showMenu');
		$('.blanketBody').fadeIn('fast');
		$('.contentMenu').css({
			'display' : 'block'
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
})