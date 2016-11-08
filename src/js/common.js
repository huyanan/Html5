$(document).ready(function() {
	$('.menu-button').on('click', function(event) {
		event.preventDefault();
		$('.menu-panel').toggle();
	});
});