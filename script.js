$(document).ready(function(){
	$('img').mouseenter(function(){
		$(this).fadeTo('fast', 1)
	});

	$('img').mouseleave(function(){
		$(this).fadeTo('fast', 0.5)
	});
});
