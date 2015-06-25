var app = angular.module('movieSite.searchLandingPage', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/searchresults', {
			controller: "searchResults",
			templateUrl: "views/landingPage/searchLandingPage.tpl.html"
		})
})

app.controller('searchResults', function($http, $scope, dataService){
    var API_BASE_URL = 'http://api.themoviedb.org/3/search/multi?';
    var API_KEY = 'api_key=cec2b81b22b80f0a38ca51d2c39ef48b';
    var API_BASE_IMAGE = "http://image.tmdb.org/t/p";
    var API_IMG_SIZE = "/original"; 
    
    var searchStr = dataService.searchStr;
    searchStr = searchStr.replace(/ /g, '+');
    
    var url = API_BASE_URL + "query=" + searchStr + "&" + API_KEY;

    
    $http.get(url).success(function(data) {
       console.log(data); 
    });
    
//	$scope.searchButton = function() {
//        
//        $http.get('http://api.themoviedb.org/3/search/multi?query=brad+pitt&api_key=cec2b81b22b80f0a38ca51d2c39ef48b&include_adult=false') 
//    }
})

//search functionality - ng-if http://api.themoviedb.org/3/search/multi?query=brad+pitt&api_key=cec2b81b22b80f0a38ca51d2c39ef48b&include_adult=false
//.replace(regex)