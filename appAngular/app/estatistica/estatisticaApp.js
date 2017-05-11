'use strict';

define(
		[
		 'estatistica/controllers/estatisticaCtrl',
		 'estatistica/services/estatisticaAPI'
		],
function(estatisticaCtrl,estatisticaAPI){
	
	var estatistica = angular.module('estatisticaApp', ['nvd3']);
	estatistica.controller("estatisticaCtrl", estatisticaCtrl);
	estatistica.service("estatisticaService", estatisticaAPI);
	
	estatistica.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	  	when('/', {
	      templateUrl: '/ise/resources/assets/view/estatistica/estatisticaPesquisa.html',
	      controller: 'estatisticaCtrl'
	    }).
	  	when('/estatisticaPesquisar', {
	      templateUrl: '/ise/resources/assets/view/estatistica/estatisticaPesquisa.html',
	      controller: 'estatisticaCtrl'
	    });
	  }]);
});


