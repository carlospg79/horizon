$( document ).ready(function () {
	$('.contextual-help').click(function (){
		$(this).find('i').toggleClass('active');
	});

	$('body').click(function (e) {
		$('[data-toggle="popover"].contextual-help').each(function () {
	        //the 'is' for buttons that trigger popups
	        //the 'has' for icons within a button that triggers a popup
	        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	            $(this).popover('hide');
	            $(this).find('i').removeClass('active');
	        }
	    });
	});
});