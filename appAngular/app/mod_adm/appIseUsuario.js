'use strict';

define(
		[		 
		 'mod_adm/services/usuarioService',	
		 'mod_adm/controllers/usuarioController'
		 ],
		 function (usuarioService, usuarioController) {
			var appIseUsuario = angular.module('appIseUsuario', []);
			appIseUsuario.factory("usuarioService", usuarioService);
			appIseUsuario.controller("usuarioController", usuarioController);
			return appIseUsuario;
		});