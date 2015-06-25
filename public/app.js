var app = angular.module('movieSite', ['ngRoute', 'movieSite.searchLandingPage', 'movieSite.welcome', 'movieSite.movie', 'movieSite.about']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
        redirectTo: '/home'   
        })
		.otherwise('/home')

});

app.controller('movieCtrl', function($location, $scope, dataService) {
    $scope.searchStr = "";
    
    $scope.searchBtnClicked = function() {
        console.log("WE GOT HERE");
        dataService.searchStr = $scope.searchStr;
        $location.path('/searchresults');  
    };
    
});

app.service('dataService', function() {
   this.searchStr = ""; 
    
});