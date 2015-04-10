// functions js
$(function(){
	var $toggleMenuBtn = $('.main-nav-toggle'),
		$mobileMenu = $('.main-nav');

	$toggleMenuBtn.on('click', function(e) {
		e.preventDefault();
		toggleMenu();
	});

	function toggleMenu() {
		$mobileMenu.add($toggleMenuBtn).toggleClass('active');
	}
});