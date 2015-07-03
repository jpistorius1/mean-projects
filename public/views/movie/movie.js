var app = angular.module('movieSite.movie', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/result', {
            controller: "movie",
            templateUrl: "views/movie/movie.tpl.html"
        })
})

app.controller('movie', function($scope, $http, resultSelectedService){
    var API_BASE_URL = 'https://api.themoviedb.org/3';
    var API_KEY = '?api_key=cec2b81b22b80f0a38ca51d2c39ef48b';
    var MOVIE = "/movie"
    var CREDITS_CALL = "/credits";
    var PERSON = "/person";
    var MOVIE_CREDITS = "/movie_credits";
    var API_BASE_IMAGE = "http://image.tmdb.org/t/p";
    var API_IMG_SIZE = "/original"; 
    
    var people = API_BASE_URL + MOVIE + '/' + resultSelectedService.clickedResult.id + CREDITS_CALL + API_KEY; 
    var movieCredits = API_BASE_URL + PERSON + '/' + resultSelectedService.clickedResult.id + MOVIE_CREDITS + API_KEY;
    
    $scope.movie = resultSelectedService.clickedResult;
    $scope.poster = API_BASE_IMAGE + API_IMG_SIZE + $scope.movie.poster_path;
    $scope.imageOfPerson = API_BASE_IMAGE + API_IMG_SIZE;
    
    
    
    $scope.profileImage = API_BASE_IMAGE + API_IMG_SIZE + $scope.movie.profile_path;
        
    $http.get(people)
    .success(function (data){
        //console.log(data);
        $scope.castAndCrew = data;
    })
    
    $http.get(movieCredits)
    .success(function (data){
        for(var i = 0; i < data.cast.length; i++){
            if(data.cast[i].poster_path === null){
                data.cast[i].poster_path = '/img/vhs2.jpg';
            }
        }
        
        $scope.moviesTheyWereIn = data; 
        console.log(data);
    })
    
})