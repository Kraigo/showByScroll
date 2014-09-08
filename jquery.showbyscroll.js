(function($) {
	$.fn.showByScroll = function(options) {
		
		// Settings
		var settings = $.extend({
			'obj' : $(this),
			'name' : 'show',
			'offsetIndex' : 2
		}, options );

		function scrollOffset() {
			return $(window).height()/settings.offsetIndex + $(window).scrollTop();
		};	

		function check_item() {
			settings.obj.each(function() {
				if ( $(this).offset().top < scrollOffset() ) {
					$(this).addClass( settings.name );
					settings.obj = settings.obj.not( $(this) );
				};
			});
		}
		
		check_item();
		
		// When scroll
		$(window).scroll(function() {	
			check_item();
		});	
			
	};
})(jQuery);