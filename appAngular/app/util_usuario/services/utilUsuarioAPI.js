'use strict';

define(
		[],
function(){
	var utilUsuarioAPI = angular.module('utilUsuarioAPI',[]);
	utilUsuarioAPI.service('InformacoesAmbiente', ['$http','config', function ($http,config) {
		
		var _getAmbienteBancoDeDados = function(){
			return $http.get(config.baseUrl+"utilUsuario/informacoesAmbiente/");
		}
		
		return {
			getAmbienteBancoDeDados: _getAmbienteBancoDeDados
		};
			
	}])
});
