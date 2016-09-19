/*
 * jQuery Partial View Plugin
 * https://github.com/ruancarvalho/jquery-partial
 *
 * Copyright 2016, Ruan Carvalho
 * https://webdevacademy.com.br
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
 (function( $ ) {

	$.fn.partial = function(template) {

		var element = this.selector;

		$.get(template, function(data) {		
			$(element).after(data).remove();
	    });
	};

}( jQuery ));