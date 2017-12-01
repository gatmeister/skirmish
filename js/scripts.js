$(document).ready(function(){

	/*======Sub Menu Dropdown=====================================*/
	function InitializeSubMenuDropdown() {
		$(".dropdown-button").dropdown({
			inDuration: 300,
			outDuration: 225,
			constrainWidth: false,
			hover: true,
			gutter: 0,
			belowOrigin: true,
			alignment: 'left'
		});
	}

	/*======Mobile Menu=====================================*/
	function InitializeMobileMenu() {
		$(".button-collapse").on('click', function(event) {
			$parent_box = $(this).closest('header');
			event.stopPropagation();
			$parent_box.find('.mobile-nav').slideToggle(375, 'swing');
		});
		$(document).on('click', function(event){
			if($(event.target).is(".mobile-nav") || $(event.target).closest(".mobile-nav").length) {

			}
			else {
				$(".mobile-nav").slideUp(375, 'swing');
			}
		});
	}

	/*======Select Dropdown=====================================*/
	function InitializeSelectDropdown() {
		$('select').material_select();
	}


	/*======Authenticate Modal Popups=====================================*/
	function InitializeAuthenticateModalPopup() {
		$(".sign-up-modal").on('click', function() {
			var modal = new Custombox.modal({
				content: {
					effect: 'slide',
					target: '#sign-up-modal-popup'
				},
				overlay: {
					color: '#000000',
					opacity: 0.75
				}
			});
			modal.open();
		});
		$(".log-in-modal").on('click', function() {
			var modal = new Custombox.modal({
				content: {
					effect: 'slide',
					target: '#log-in-modal-popup'
				},
				overlay: {
					color: '#000000',
					opacity: 0.75
				}
			});
			modal.open();
		});
		$(".email-authenticate-modal").on('click', function() {
			var modal = new Custombox.modal({
				content: {
					effect: 'slide',
					target: '#email-authenticate-modal-popup'
				},
				overlay: {
					color: '#000000',
					opacity: 0.75
				}
			});
			modal.open();
		});
		$(".reset-password-modal").on('click', function() {
			var modal = new Custombox.modal({
				content: {
					effect: 'slide',
					target: '#reset-password-modal-popup'
				},
				overlay: {
					color: '#000000',
					opacity: 0.75
				}
			});
			modal.open();
		});
	}

	/*======Initialize Functions=====================================*/
	InitializeSubMenuDropdown();
	InitializeMobileMenu();
	InitializeSelectDropdown();
	InitializeAuthenticateModalPopup();
});
