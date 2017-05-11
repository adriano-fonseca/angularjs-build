"use strict";

require.config ({
   baseUrl: "resources/assets/js/appmin",         
   paths: {
	 // Configure alias to libraries
    'angular'	     : '/ise/resources/vendor/angular/angular.min',
    'jquery'	     : '/ise/resources/vendor/jquery/dist/jquery.min',
    'ngAnimate'      : '/ise/resources/vendor/angular-animate/angular-animate.min',
    'ngMessages'     : '/ise/resources/vendor/angular-messages/angular-messages.min',
    'ngRoute'        : '/ise/resources/vendor/angular-route/angular-route.min',
    'ngResource'     : '/ise/resources/vendor/angular-resource/angular-resource.min',
    'ngSanitize'     : '/ise/resources/vendor/angular-sanitize/angular-sanitize.min',
    'infinite-scroll': '/ise/resources/vendor/ngInfiniteScroll/build/ng-infinite-scroll.min',
    'bootstrap'      : '/ise/resources/vendor/bootstrap/dist/js/bootstrap.min',
    'ui.bootstrap'   : '/ise/resources/vendor/angular-bootstrap/ui-bootstrap-tpls.min',
    'ngFileSaver'    : '/ise/resources/vendor/angular-file-saver/dist/angular-file-saver.bundle.min',
    'd3'			 : '/ise/resources/vendor/d3/d3.min',
    'nvd3'			 : '/ise/resources/vendor/nvd3/build/nv.d3.min',
    'angular-nvd3'   : '/ise/resources/vendor/angular-nvd3/dist/angular-nvd3.min',
    'iseApp'         : "/ise/resources/assets/js/ise.min"
     
   },
   waitSeconds: 0,
    shim: {
    		'jquery': {
    			exports: 'jquery'
    		},
    		'angular': {
	        	deps: ['jquery'],
	        	 exports: 'angular'
	        },
	        'bootstrap' : {
	        	deps: ['jquery']
	        },
	        'd3': {
	        	exports: 'd3',
	        	deps: ['angular']
	        },
	        'nvd3': {
	          deps: ['d3'],
	          exports: 'nv'
	        },
	        'angular-nvd3': {
		          deps: ['angular','d3','nvd3'],
	        },
	        'infinite-scroll' : {
	        	deps: ['angular']
	        },	       
	        'ngAnimate' : {
	        	deps: ['angular']
	        },
	        'ngMessages' : {
	        	deps: ['angular']
	        },
	        'ngRoute' : {
	        	deps: ['angular']
	        },
	        'ngResource' : {
	        	deps: ['angular']
	        },
	        'ngSanitize' : {
	        	deps: ['angular']
	        },
	        'ui.bootstrap' : {
	        	deps: ['angular']
	        },
	        'ngFileSaver' : {
	        	deps: ['angular']
	        },
	        'iseApp' : {
	        	deps: ['ngRoute','ngSanitize','ngResource','ngMessages','ngAnimate','infinite-scroll','ui.bootstrap','ngFileSaver','angular-nvd3']
	        }
    }
});


require(['iseApp'],function(){
	angular.bootstrap(document,['iseApp']);
});