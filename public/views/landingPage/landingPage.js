var app = angular.module('movieSite.landingPage', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/landingPage', {
			controller: "landingPage",
			templateUrl: "views/landingPage/landingPage.tpl.html"
		})
})

app.controller('landingPage', function(){
	
})