'use strict';

define( 
		[],
		function () {
			var spinnerDirective = ['$timeout', '$log', function ($timeout, $log) {
				return {
				      restrict: 'E',
				      template: '<i class="fa fa-cog fa-spin" style="font-size: 30px;"></i>',
				      scope: {
				        show: '=',
				        delay: '@'
				      },
				      link: function(scope, elem, attrs) {
				        //$log.info('elem='+elem+' attrs=['+attrs+']');
				        var showTimer;

				        // Exibe o spinner se a propriedade 'show' for 'true', esconde se for 'false'.
				        scope.$watch('show', function(newVal){
				          newVal ? showSpinner() : hideSpinner();
				        });
				        
				        function showSpinner() {
				          //Se jah estiver em progresso, espera. 
				          if (showTimer) return;

				          // Aplica timeout conforme configurado
				          showTimer = $timeout(showElement.bind(this, true), getDelay());
				        }

				        function hideSpinner() {
				          // Se ainda esta em progresso, cancela para que fique sincronizado.
				          if (showTimer) {
				            $timeout.cancel(showTimer);
				          }

				          showTimer = null;

				          showElement(false);
				        }

				        function showElement(show) {
				          //$log.info('showElement=['+show+']');	
				          show ? elem.css({display:''}) : elem.css({display:'none'});
				        }

				        function getDelay() {
				          var delay = parseInt(scope.delay);

				          return angular.isNumber(delay) ? delay : 200;
				        }
				      }
				    };
			}];			
			return spinnerDirective;
		});