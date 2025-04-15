/*
Title: Main Scripts
*/

$(function(){
	"use strict";
	// Full screen pre loader
	$(window).load(function(){
		$("#pre-loader").delay(500).fadeOut(2000);
		$(".preload-logo").addClass('zoomOutUp');
		$(".loader").addClass('zoomOutDown');
	});

	//Logo fadeIn fadeOut on
	$(window).scroll(function(){
	  if($(this).scrollTop() > $(window).height()/2.2) $('.logo-wrapper').fadeOut('slow');
	  if($(this).scrollTop() < $(window).height()/2.2) $('.logo-wrapper').fadeIn('slow');
	});

	//Using the smooth scroll for smooth navigation
	smoothScroll.init({
		speed: 500, // Integer. How fast to complete the scroll in milliseconds.
		easing: 'easeInOutCubic', // Easing pattern to use.
		updateURL: false, // Boolean. To update or not the URL with the anchor hash on scroll.
		offset: 0, // Integer. How far to offset the scrolling anchor location in pixels.
		callbackBefore: function ( toggle, anchor ) {}, // Function to run before scrolling.
		callbackAfter: function ( toggle, anchor ) {} // Function to run after scrolling.
	});

	// wow animation by using with animate css.
	let isiPad = (navigator.userAgent.match(/iPad/i) != null);
	if (($.browser.mobile)||(isiPad)) {
		// disable animation on mobile.
		$("body").removeClass("wow");
	}
	else {
		let wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true
		});
		wow.init();
	}

	// Full screen navigations
	let triggerBtn = document.getElementById( 'trigger-navbar' ),
		navbar = document.querySelector( 'section.navbar' ),
		closeBtn = navbar.querySelector( 'a.navbar-close' ),
		navClick = navbar.querySelector( 'section.navbar nav ul li a' ),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

		function toggleOverlay() {
		if (classie.has(navbar, 'open')) {
			classie.remove(navbar, 'open');
			classie.add(navbar, 'close');
			let onEndTransitionFn = function(ev) {
				if (support.transitions) {
					if (ev.propertyName !== 'visibility') return;
					this.removeEventListener(transEndEventName, onEndTransitionFn);
				}
				classie.remove( navbar, 'close' );
			};
			if (support.transitions) {
				navbar.addEventListener(transEndEventName, onEndTransitionFn);
			}
			else {
				onEndTransitionFn();
			}
		}
		else if(!classie.has( navbar, 'close' )) {
			classie.add( navbar, 'open' );
		}
	}

	triggerBtn.addEventListener( 'click', toggleOverlay );
	closeBtn.addEventListener( 'click', toggleOverlay );
	$('section.navbar nav ul li a').click(function(){
		toggleOverlay();
	});

	//prepare video
	function sliderResize() {
		$('.video').height($(window).height());
		$('.home-text').css('top',$(window).height()/4+'px');
		$('.home-text-2').css('top',$(window).height()/4.5+'px');
	}
	sliderResize();

	$(window).resize(function() {
		sliderResize();
	});
	$('.video .cont').addClass('visible');

	setTimeout(function() {
		$('.video .sdf, .video .suys, .video .arrow').addClass('visible');
	}, 2000);



	//play video
	$('.video .play').click(function() {
		//stop the video
		if (!window.isMobile){
			$('body').addClass('noscroll')
				.append(`
					<div class="previewer">
						<div>
							<iframe src="//player.vimeo.com/video/81676731?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1"
								frameborder="0"
								webkitallowfullscreen
								mozallowfullscreen
								allowfullscreen>
							</iframe>
						</div>
						<div class="close"></div>
					</div>`);

			//pause video
			$('.body').addClass('paused');

			$('.previewer').click(function() {
				$('.body').removeClass('noscroll');
				$(this).remove();

				//play video back
				$('.body').removeClass('paused');
			});
			return false;
		}
	});

	// Carousel
	$("#home-text-slider").owlCarousel({
	  navigation : true, // Show next and prev buttons
	  slideSpeed : 300,
	  autoPlay : 5000,
	  stopOnHover : false,
	  paginationSpeed : 400,
	  singleItem:true
	});

	$("#testimonial-slider").owlCarousel({
	  navigation : true, // Show next and prev buttons
	  slideSpeed : 300,
	  autoPlay : 5000,
	  stopOnHover : false,
	  paginationSpeed : 400,
	  singleItem:true
	});

	//Counter Up
	$('.counter').counterUp({
		delay: 5,
		time: 800
	});

	//theme style switcher
	$('#theme-customizer .cog').click(function(){
		$('#theme-options').slideToggle("slow")
	});

	//reset previously set border colors and hide all message on .keyup()
	$("#contact_form input, #contact_form textarea").keyup(function() {
		$("#contact_form input, #contact_form textarea").css('border-color','');
		$("#form_result").slideUp();
	});

	$('#contact_form').on('submit', function(event) {
		event.preventDefault();

		let formData = new FormData(this);

		$.ajax({
			url:  CONFIG.apiUrl + 'contact-form',
			type: 'POST',
			data: formData,
			processData: false,
			contentType: false,
			headers: {
				'Accept': 'application/json',
			},
			success: function(data) {
				alert(data.message);
			},
			error: function(xhr) {
				let errorMsg = 'Something went wrong.';
				if (xhr.responseJSON) {
					if (xhr.responseJSON.errors) {
						errorMsg = JSON.stringify(xhr.responseJSON.errors);
					} else if (xhr.responseJSON.message) {
						errorMsg = xhr.responseJSON.message;
					}
				}
				alert('Error: ' + errorMsg);
				console.error('Request failed', xhr);
			}
		});
	});

});
