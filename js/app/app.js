'use strict';

var reporte = angular
	.module('reporte', ['ngRoute', 
					'ngResource', 
					'ngAnimate', 
					'firebase'])
	.constant('FirebaseUrl', 'https://reportesapp.firebaseio.com/')
	.config(function($routeProvider){
		$routeProvider
		.when('/miprograma', {templateUrl: 'templates/programarme.html', controller: 'programaController'})
		.otherwise({redirectTo:'/miprograma'})
	})
