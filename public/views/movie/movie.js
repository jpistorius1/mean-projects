var app = angular.module('movieSite.movie', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/results', {
            controller: "movie",
            templateUrl: "views/movie/movie.tpl.html"
        })
})

app.controller('movie', function($scope, $http, searchLandingPage){
    var API_BASE_URL = 'https://api.themoviedb.org/3';
    var API_KEY = '?api_key=cec2b81b22b80f0a38ca51d2c39ef48b';
    var API_BASE_IMAGE = "http://image.tmdb.org/t/p";
    var API_IMG_SIZE = "/original"; 
    
    $http.get(API_BASE_URL + '/' + searchLandingPage.type + searchLandingPage.searchID + API_KEY)
    .success(function(data){
        $scope.movie = data
        //$scope.poster = API_BASE_IMAGE + API_IMG_SIZE + data.poster_path;
        console.log(data);
    })
    .error(function(err){
        console.log(err);
    });
    
})

