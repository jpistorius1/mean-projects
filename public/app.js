var app = angular.module('movieSite', ['ngRoute', 'movieSite.landingPage', 'movieSite.welcome', 'movieSite.movie', 'movieSite.about']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'landingPage',
			templateUrl: 'views/landingPage/landingPage.tpl.html'
		})
		.otherwise('/home')

}) 