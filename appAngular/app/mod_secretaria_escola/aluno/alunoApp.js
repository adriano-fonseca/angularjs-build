'use strict';

define(
		[
		 'mod_secretaria_escola/controllers/alunoCtrl',
		],
function(alunoCtrl,estatisticaCtrl){
	var aluno = angular.module('aluno', []);
	aluno.controller("alunoCtrl", alunosCtrl);
	
	aluno.config(['$routeProvider', function($routeProvider) {
		  $routeProvider.
		  	when('/', {
		      templateUrl: '/ise/resources/assets/view/mode_secretaria_escola/aluno.html',
		      controller: 'estatisticaCtrl'
		    }).
		  	when('/consultaAluno', {
		      templateUrl: '/ise/resources/assets/view/estatistica/consultaAluno.html',
		      controller: 'estatisticaCtrl'
		    });
		  }]);
});


