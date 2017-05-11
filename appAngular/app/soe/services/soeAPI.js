'use strict';

define(
		[],
function(){
	var soeService = ['$http','config', function ($http,config) {
		
		var dadosSessao;
		
		var _getDadosSessao = function(){
			return $http.get(config.baseUrl+"soe/dadosSessao/").then(function successCallback(dadosSessao){
				dadosSessao.jbossLocalComBancoProducao=(dadosSessao.jbossLocalComBancoProducao==='true');
				dadosSessao.jbossLocalComBancoHomologacao=(dadosSessao.jbossLocalComBancoHomologacao==='true');
				return dadosSessao;
			}, function errorCallback(response) {
					$scope.error = "Não foi possível obter dados da sessao!";
			});
		}
		
		return {
			getDadosSessao: _getDadosSessao
			//saveContato: _saveContato
			
		};
	}]
	
	return  soeService;
	
});