'use strict';

define(
		[
		 'notificacao/controllers/notificacaoCtrl',
		 'notificacao/services/notificacaoAPI',
		 'versao/services/versaoAPI',
		 'soe/services/soeAPI'
		],
function(notificacaoCtrl,notificacaoAPI,versaoAPI,soeAPI){
	
	var notificacao = angular.module('notificacaoApp', []);
	notificacao.service("notificacaoService", notificacaoAPI);
	notificacao.service("versaoService", versaoAPI);
	notificacao.service("soeAPI",soeAPI);
	notificacao.controller("notificacaoCtrl", notificacaoCtrl);
	
	notificacao.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	  when('/', {
	      templateUrl: '/ise/resources/assets/view/notificacao/notificacao.html',
	      controller: 'notificacaoCtrl'
	    }).
	  	when('/notificacoes', {
	      templateUrl: '/ise/resources/assets/view/notificacao/notificacaoListar.html',
	      controller: 'notificacaoCtrl'
	    }).
	    when('/notificacao/:notificacaoId', {
	      templateUrl: '/ise/resources/assets/view/notificacao/visualizaNotificacao.html',
	      controller: 'notificacaoCtrl'
	    });
	  }]);
});


