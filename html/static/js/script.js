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
	let triggerBtn = document.getElementById( 'trigger-navbar' );
	let navbar = document.querySelector( 'section.navbar' );
	let closeBtn = navbar.querySelector( 'a.navbar-close' )
	let transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	}
	let transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ]
	let support = { transitions : Modernizr.csstransitions };

	// Form Elements
	let $contact_form_response = $('#contact-form-response');
	let $btnSubmitContact = $('#btnSubmitContact');

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

	//reset previously set border colors and hide all message on .keyup()
	$("#contact_form input, #contact_form textarea").keyup(function() {
		$("#contact_form input, #contact_form textarea").css('border-color','');
		$("#form_result").slideUp();
	});

	$('#contact_form').on('submit', function(event) {
		event.preventDefault();
		// Disable the submit button to prevent multiple clicks.
		$btnSubmitContact.prop('disabled', true);

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
				$contact_form_response.removeClass('hidden');
				$contact_form_response.addClass('alert-success');
				$contact_form_response.html("Su mensaje ha sido enviado, pronto nos pondremos en contacto con usted.");
				// $contact_form_response.html(data.message);
			},
			error: function(xhr) {
				$contact_form_response.removeClass('hidden');
				$contact_form_response.addClass('alert-danger');
				$contact_form_response.html('Ha ocurrido un error, por favor intente m&aacute;s tarde.');
				/*if (xhr.responseJSON) {
					if (xhr.responseJSON.errors) {
						errorMsg = JSON.stringify(xhr.responseJSON.errors);
					} else if (xhr.responseJSON.message) {
						errorMsg = xhr.responseJSON.message;
					}
				}*/
				console.error('Request failed', xhr);
			}
		});
	});

});
