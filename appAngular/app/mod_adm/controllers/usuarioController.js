'use strict';

define(
		[],		
		function () {
			var usuarioController = ['$scope', '$window', '$timeout', '$cacheFactory', 'usuarioService', '$uibModal', '$log', 'soeAPI',
			                         function ($scope, $window, $timeout, $cacheFactory, usuarioService, $uibModal, $log, soeAPI) {
				$scope.init = function () {
					$scope.isBusy = true;
				}
				$scope.salvarEmailSeguranca = function () {
					$scope.isBusy = true;
					var usuarioAtualizado = $scope.usuario;
					usuarioService
					.usuarioFactory()
					.update({}, 
							{siglaOrganizacao: usuarioAtualizado.siglaOrganizacao, codUsuario: usuarioAtualizado.codUsuario, emailSeguranca: usuarioAtualizado.emailSeguranca}, 
							function (result) {
								if (result != undefined && result.error != null) {
									$window.alert(result.error);
									return;
								}
								if (result == undefined || result.codUsuario == undefined) {
									$window.location.href = '/ise/soe/PRSoeLogoff.jsp?MSG=Sessao expirada ou encerrada por outro logon!';
								}
								$scope.showMsg = true;
								$scope.msg = 'Registro atualizado com sucesso!';
								$timeout(function(){
									$scope.showMsg = false;
								}, 10000);
							}, 
							function error(responseError) {
								$log.error('[usuarioController-ERROR] responseError.status=['+responseError.status+']');
								if (responseError.status != 0) {
									$window.alert('Houve algum problema na operação!');								      
								}
							}					
					).$promise.then(
							function(response){
								$scope.isBusy = false;
								return response;
							});					
				};				
				$scope.consultarUsuario = function () {
					$scope.isBusy = true;
					usuarioService
					.usuarioFactory()
					.get({}, 
							function (result) {
								$scope.usuario = result;						  	
								if ($scope.usuario == undefined) {
									$window.location.href = '/ise/soe/PRSoeLogoff.jsp?MSG=Sessao expirada ou encerrada por outro logon!';
								}
								$scope.showMsg = false;
								if ($scope.usuario == null) {				
									$scope.showMsg = true;
									$scope.msg = 'Nenhum registro encontrado!';
									$timeout(function(){
										$scope.showMsg = false;
									}, 10000);
								} 
							}, 
							function error(responseError) {
								if (responseError.status != 0) {
									$window.alert('Houve algum problema na operação!');
								}
							}
					).$promise.then(
							function(response){
								$scope.isBusy = false;
								return response;
							});
				};
				$scope.init();				
				
//				$scope.modalUpdate = function (size, selectedUsuario) {
//				var modalInstance = $uibModal.open({
//				animation: true,
//				templateUrl: 'myModalContent.html',
//				controller: function ($scope, $uibModalInstance, usuario) {
//				$scope.usuario = usuario;
//				},
//				size: size,
//				resolve: {
//				usuario: function () {
//				return selectedUsuario;
//				}
//				}
//				});

//				modalInstance.result.then(function (selectedItem) {
//				$scope.selected = selectedItem;
//				}, function () {
//				$log.info('Modal dismissed at: ' + new Date());
//				});
//				};
			}];			
			return usuarioController;
		});
