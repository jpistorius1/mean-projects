var app = angular.module('movieSite.about', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/about', {
			controller: "about",
			templateUrl: "views/about/about.tpl.html"
		})
})

app.controller('about', function(){
	
})