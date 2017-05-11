'use strict';

define(
		[],
function(){
			
	var estatisticaCtrl = ['$scope', function($scope) {
		$scope.title = "Modulo de Estatistica ";
		
		$scope.options = {
	            chart: {
	                type: 'discreteBarChart',
	                height: 450,
	                margin : {
	                    top: 20,
	                    right: 20,
	                    bottom: 50,
	                    left: 55
	                },
	                x: function(d){return d.label;},
	                y: function(d){return d.value + (1e-10);},
	                showValues: true,
	                valueFormat: function(d){
	                    return d3.format(',.4f')(d);
	                },
	                duration: 500,
	                xAxis: {
	                    axisLabel: 'X Axis'
	                },
	                yAxis: {
	                    axisLabel: 'Y Axis',
	                    axisLabelDistance: -10
	                }
	            }
	        };
		
		$scope.data = [{
		    key: "Cumulative Return",
		    values: [
		        { "label" : "A" , "value" : -29.765957771107 },
		        { "label" : "B" , "value" : 0 },
		        { "label" : "C" , "value" : 32.807804682612 },
		        { "label" : "D" , "value" : 196.45946739256 },
		        { "label" : "E" , "value" : 0.19434030906893 },
		        { "label" : "F" , "value" : -98.079782601442 },
		        { "label" : "G" , "value" : -13.925743130903 },
		        { "label" : "H" , "value" : -5.1387322875705 }
		        ]
		    }]
		
		$scope.options1 = {
	            chart: {
	                type: 'pieChart',
	                height: 500,
	                x: function(d){return d.key;},
	                y: function(d){return d.y;},
	                showLabels: true,
	                duration: 500,
	                labelThreshold: 0.01,
	                labelSunbeamLayout: true,
	                legend: {
	                    margin: {
	                        top: 10,
	                        right: 35,
	                        bottom: 5,
	                        left: 0
	                    }
	                }
	            }
	        };

	        $scope.data1 = [
	            {
	                key: "One",
	                y: 5
	            },
	            {
	                key: "Two",
	                y: 2
	            },
	            {
	                key: "Three",
	                y: 9
	            },
	            {
	                key: "Four",
	                y: 7
	            },
	            {
	                key: "Five",
	                y: 4
	            },
	            {
	                key: "Six",
	                y: 3
	            },
	            {
	                key: "Seven",
	                y: .5
	            }
	        ];
		
	}];

	return estatisticaCtrl;
	
});