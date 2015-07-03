var app = angular.module('movieSite.searchLandingPage', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/searchresults', {
            controller: "searchResults",
            templateUrl: "views/landingPage/searchLandingPage.tpl.html"
        })
});

app.controller('searchResults', function($http, $scope, $location, dataService, resultSelectedService){
    var API_BASE_URL = 'http://api.themoviedb.org/3/search/multi?';
    var API_KEY = 'api_key=cec2b81b22b80f0a38ca51d2c39ef48b';
    $scope.API_BASE_IMAGE = "http://image.tmdb.org/t/p";
    $scope.API_IMG_SIZE = "/original"; 
    
    var searchStr = dataService.searchStr;
    searchStr = searchStr.replace(/ /g, '+');
    
    var url = API_BASE_URL + "query=" + searchStr + "&" + API_KEY;
    
    $http.get(url)
        .success(function(data) {
            console.log(data); 
            $scope.getSelection = url;
            $scope.result = data;
            for(var i = 0; i < data.results.length; i++){
                if(data.results[i].poster_path === null){
                    data.results[i].poster_path = '/img/vhs2.jpg';
                }
            }
    });
    
    $scope.searchResultRowClicked = function(searchResult){
        console.log(searchResult);
        resultSelectedService.clickedResult = searchResult;
        $location.path('/result');
    }
    
});

app.service('resultSelectedService', function(){

    this.clickedResult = {};
});