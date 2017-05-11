'use strict';

define(
		[],
		function () {
			var commaToDecimal = function () { 
				return function(value) { 
					return value ? parseFloat(value).toFixed(2).toString().replace('.', ',') : null; 
				};
			};
			return {
				commaToDecimal: commaToDecimal
			};
		});			