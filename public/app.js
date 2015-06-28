var app = angular.module('movieSite', ['ngRoute', 'movieSite.searchLandingPage', 'movieSite.welcome', 'movieSite.movie', 'movieSite.about']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/home'   
        })
        .otherwise('/home')
});

app.controller('movieCtrl', function($location, $scope, $route, dataService) {
    $scope.searchStr = "";
    
    $scope.searchBtnClicked = function() {
        
        dataService.searchStr = $scope.searchStr;
        
        if($location.path() === '/searchresults'){
            
            $route.reload();
        } else {
            $location.path('/searchresults');  
        }
    
    };
    
});

app.service('dataService', function() {
   this.searchStr = ""; 
    
});