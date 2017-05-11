'use strict';

define(
		['ngResource'],
function(){
	var notificacaoResourceAPI = angular.module('notificacaoResourceAPI', ['ngResource']);
	notificacaoResourceAPI.factory('ContarNotificacoesUsuarioFactory', function ($resource, $window) {
		
		return $resource('/ise/rest/notificacao/contar/', {}, {
			'get': {
				method: 'GET',
				params: { nroSoe: ':nroSoe', gruposUsuario: ':gruposUsuario'},
				interceptor: { responseError: function (response) {
					console.log("[ContarNotificacoesUsuarioFactoryFactory-Interceptor-Error]response.status=["+response.status+"]");
					console.log("[ContarNotificacoesUsuarioFactoryFactory-Interceptor-Error]response=["+response+"]");
					if (response.status == undefined || response.status == 0) {
						console.log('[ContarNotificacoesUsuarioFactoryFactory-Error]Redirecting to /ise/soe/PRSoeLogoff.jsp');
						$window.location.href = '/ise/soe/PRSoeLogoff.jsp?MSG=Sessao expirada ou encerrada por outro logon!';
					}
				}
				},
				responseError: function (response) {
					console.log("[ContarNotificacoesUsuarioFactoryFactory-Error]response.status=["+response.status+"]");
				},			
			}
		});
	})
});

