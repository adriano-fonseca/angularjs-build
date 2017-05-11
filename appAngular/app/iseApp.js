'use strict';

define(
		[
		 'notificacao/notificacaoApp',
		 'mod_totais/appIseTotaisAvalConceito',
		 'estatistica/estatisticaApp',
		 'mod_adm/appIseUsuario',
		 'directives/spinner',
		 'filters/appIseFilters',
		 ],
function(notificacaoApp, appIseTotaisAvalConceito, appIseRISEESCALU029, estatisticaApp, appIseUsuario, spinnerDirective, appIseFilters){
	var iseApp = angular.module('iseApp', ['ngRoute','ngSanitize','ngResource','ui.bootstrap','ngFileSaver','notificacaoApp','appIseTotaisAvalConceito', 'estatisticaApp', 'appIseUsuario']);
	
	iseApp.controller("mainCtrl", function($scope){
	});
	
	iseApp.directive('spinner', spinnerDirective);
	iseApp.filter("commaToDecimal", appIseFilters.commaToDecimal);
	
	iseApp.value("config", {
		baseUrl: "/ise/rest/"
	});
	
	
	/*seta de quanto em quanto tempo a função de scroll é chamado*/
	angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250)
	
	/*Quando se usa em provider � necessario incluir como constante*/
	iseApp.constant("configConstant", {
		nroItensListagem: 100
	});
	
	
	iseApp.config(['$routeProvider', function($routeProvider) {
		  var $log = angular.injector(['ng']).get('$log')
		  $routeProvider.
		  	when('/', {
		      templateUrl: '/ise/resources/assets/view/home.html',
		      controller: 'mainCtrl'
		    }).
		    when('/aluno', {
			      templateUrl: '/ise/resources/assets/view/mod-secretaria-escola/aluno.html',
			      controller: 'alunoCtrl'
			    }).
		    when('/notificacao', {
		      templateUrl: '/ise/resources/assets/view/notificacao/notificacao.html',
		      controller: 'notificacaoCtrl'
		    }).
		    when('/seguranca', {
			      templateUrl: '/ise/resources/assets/view/mod_adm/usuarioEditar.html',
			      controller: 'usuarioController'
			}).
		    when('/estatistica', {
			      templateUrl: '/ise/resources/assets/view/estatistica/estatistica.html',
			      controller: 'estatisticaCtrl'
			}).
			when('/totaisAvalListar', {
		      templateUrl: '/ise/resources/assets/view/mod_totais/totaisAvalListar.html',
		      controller: 'totaisAvalConceitoController'
			}).
			when('/totais', {
		      templateUrl: '/ise/resources/assets/view/mod_totais/totais.html',
		      controller: 'totaisAvalConceitoController'
			});
	}]);
});