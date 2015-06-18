var app = angular.module('movieSite.welcome', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/welcome', {
			controller: "welcome",
			templateUrl: "views/welcome/welcome.tpl.html"
		})
})

app.controller('welcome', function(){
	
})