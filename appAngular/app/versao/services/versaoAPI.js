'use strict';

define(
		[], 
function(){
	var versaoService = ['$http', function($http) {
		
		var _getVersionProperties = function() {
		    var promise = $http({
		        method : 'GET',
		        url : '/ise/rest/ise_versao/getVersao'
		    }).success(function(data, status, headers, config) {
		        return data;
		    });   
 
		    return promise; 
		}
		return {
			getVersionProperties: _getVersionProperties
		};
	}]
	
	return versaoService;
});