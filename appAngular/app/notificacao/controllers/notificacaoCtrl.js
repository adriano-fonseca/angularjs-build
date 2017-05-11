'use strict';

define(
		[],
function(){
			
	var notificacaoCtrl = ['$scope','$sce','$window','$interval', '$location','notificacaoService','versaoService','soeAPI','$timeout', '$log', 
	                       function($scope,$sce,$window,$interval,$location,notificacaoService,versaoService,soeAPI,$timeout, $log) {
		
		$scope.totalNotificacaoUsuario=0;
		$interval(getTotalNotificacoesUsuario, 2100000);
		$scope.msgAmbienteProducao = 'JBoss local apontando para banco de Produção';
		$scope.exibeTotalNotificacoes = true;
		
		
		
		$scope.notificacoes = [];
		
		versaoService.getVersionProperties().then(function(response){
	        $scope.version = response.data.version;
	        $scope.buildDate = response.data.buildDate;	        
	    });
		
	/* NÂO APAGAR ESSE COMENTARIO
	 * 
	 * Exemplo chamando uma factory que usar $resource ao inves de $Http 
	 * para consumir um servico
	 * 
	var getTotalNotificacoesUsuario3 = function(data){
			console.log(ContarNotificacoesUsuarioFactory.get(data, function(resultado){
			$scope.totalNotificacaoUsuario=resultado.total;
			},function(resultado){
				console.log("Erro");
			}));
	}
	*/	
		function getTotalNotificacoesUsuario(){
			notificacaoService.getTotalNotificacoes().success(function(data, status){
				if (data.total == undefined) {
					$window.location.href = '/ise/soe/PRSoeLogoff.jsp?MSG=Sessao expirada ou encerrada por outro logon!';
				}
				$scope.totalNotificacaoUsuario=data.total;
				if($scope.totalNotificacaoUsuario>0){
					$scope.exibeTotalNotificacoes=true;
				}
			}).error(function(data) {
				$scope.error = "Não foi possível carregar Notificações!";
			});
		}
		
		function getListaNotificacoes(){
			notificacaoService.getNotificacoes().success(function(data, status){
				$scope.notificacoes=data;
			}).error(function(data) {
				$scope.error = "Não foi possível listar Notificações!";
			});
		}
		
		$scope.atualizaNotificacoes = function (){
			var url = "/ise/fpc_common/fpc_notificacao.jsf";
			getTotalNotificacoesUsuario();
			getListaNotificacoes();
			parent.frmDados.location.href = url;
		}
		
		$scope.atualizaTotalNotificacoes = function (){
			getTotalNotificacoesUsuario();
		}
		
		/*Metodo para teste da tela de listagem de notificações em angular*/
		$scope.atualizaNotificacoes2 = function (){
			var url = "/ise/resources/assets/view/notificacao/index.html#notificacoes"
			getTotalNotificacoesUsuario();
			getListaNotificacoes();
			parent.frmDados.location.href = url;
		}
		
		$scope.atualizaNotificacoes3 = function (){
			getTotalNotificacoesUsuario();
			getListaNotificacoes();
		}
		
		 /*Meto para teste do infinite scroll*/
		 $scope.listData = function() {
		    	var start = 0;
			    var ending = start+5;
			    var lastdata = 200;
			    var reachLast = false;
			    var notificacaoCopia = {};
			    
			   if($scope.notificacoes.length<150){
			    notificacaoService.getNotificacoes().success(function(data, status){
			    	
			    	
					if(data.length>0){
				    	 for(var i=0; i<=10; i++){
				 		    angular.copy(data[0], notificacaoCopia);
				 		    $scope.notificacoes.push(notificacaoCopia);
				    	 }
				    }

					
					$scope.notificacoes.forEach(function(element){
						element.htmlSafe = $sce.trustAsHtml(element.textoNotificacao);
					});
				}).error(function(data) {
					$scope.error = "Não foi possível listar Notificações!";
				});
			   }
			    
		         if(reachLast){
		             return false;
		         }
		        //var jsondt = [];
		            for (var i = start; i < ending; i++) {
		               
		            };
		            start = i;
		            ending = i+10;
					 
		             if(ending >= lastdata) {
		                 reachLast = true;
		                 $scope.loadmore = "Reached at bottom";
		             }
		            };
		
		     $scope.listData();
		
		
		var getDadosUsuarioSOE = function(){
			soeAPI.getDadosSessao().then(function(dadosSessao, status){
					$scope.dadosSessao = dadosSessao.data;					 
			},function(response) {
				$scope.error = "Não foi possível obter o banco de dados do ambiente!";
			});

		}
			
		getTotalNotificacoesUsuario();
		getDadosUsuarioSOE();
		
		var getNavegadorName = function (){
			if(navigator.userAgent.indexOf('Edge')>=0){
				$scope.navegadorName = 'Edge.' ;
			}else if(navigator.userAgent.indexOf('Firefox')>=0){
				$scope.navegadorName = 'Mozilla FireFox' ;
			}else if(navigator.userAgent.indexOf('Chrome')>=0){
				$scope.navegadorName = 'Google Chrome' ;
			}else if(navigator.userAgent.indexOf('Safari')>=0){
				$scope.navegadorName = 'Safari' ;
			}else if(navigator.userAgent.indexOf('MSIE')>=0 || navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || navigator.userAgent.match(/rv 12/)){
				$scope.navegadorName = 'Internet Explorer' ;
			}else{
				$scope.navegadorName = '';
			}   
		}
		
		getNavegadorName();
		
	}];
	
	return notificacaoCtrl;
	
});