'use strict';

define(
		[],
function(){
	var notificacaoService = ['$http','config', function ($http,config) {
			
			var _getTotalNotificacoes = function(){
				return $http.get(config.baseUrl+"notificacao/contar");
			}
			
			var _getNotificacoes = function(){
				return $http.get(config.baseUrl+"notificacao/listar");
			}
			
			/*
			var _saveContato = function(contato){
				return $http.post(config.baseUrl + "contatos.html",contato);
			}*/
				
			return {
				getTotalNotificacoes: _getTotalNotificacoes,
				getNotificacoes: _getNotificacoes
		     }
				 
				//saveContato: _saveContato
	}];
	
	return notificacaoService;
});
