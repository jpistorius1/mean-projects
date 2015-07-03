var app = angular.module('movieSite.welcome', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            controller: "welcome",
            templateUrl: "views/welcome/welcome.tpl.html"
        })
})

app.controller('welcome', function($scope, $http, $location, resultSelectedService){
    var API_BASE_URL = 'http://api.themoviedb.org/3';
    var API_KEY = '?api_key=cec2b81b22b80f0a38ca51d2c39ef48b';
    var UPCOMING = '/movie/upcoming';
    var RELEASES = '&append_to_response=releases';
    var API_BASE_IMAGE = "http://image.tmdb.org/t/p";
    var API_IMG_SIZE = "/original"; 
        
    $http.get(API_BASE_URL + UPCOMING + API_KEY + RELEASES)
    .success(function(data){
        var randomMovie0 = Math.floor(Math.random() * data.results.length);
        
        var randomMovie1 = Math.floor(Math.random() * data.results.length);
        
        var countSafety = 0;
        while (randomMovie1 == randomMovie0){
            randomMovie1 = Math.floor(Math.random() * data.results.length);
        };
        
        var randomMovie2 = Math.floor(Math.random() * data.results.length);
        
        countSafety = 100;
        while (randomMovie2 == randomMovie1 || randomMovie2 == randomMovie0){
            randomMovie2 = Math.floor(Math.random() * data.results.length);
        };
        
        $scope.movie0 = data.results[randomMovie0];
        $scope.movie1 = data.results[randomMovie1];
        $scope.movie2 = data.results[randomMovie2];
        
        var posterUrl0 = data.results[randomMovie0].poster_path;
        var posterUrl1 = data.results[randomMovie1].poster_path;
        var posterUrl2 = data.results[randomMovie2].poster_path;
        
        if (posterUrl0 === null){
            $scope.posterResult0 = '/img/vhs2.jpg';
        } else {
            $scope.posterResult0 = API_BASE_IMAGE+ API_IMG_SIZE + posterUrl0;
        }
        
        if (posterUrl1 === null){
            $scope.posterResult1 = '/img/vhs2.jpg';
        } else {
            $scope.posterResult1 = API_BASE_IMAGE+ API_IMG_SIZE + posterUrl1;
        }
        
        if (posterUrl2 === null) {
            $scope.posterResult2 = '/img/vhs2.jpg';
        } else {
            $scope.posterResult2 = API_BASE_IMAGE+ API_IMG_SIZE + posterUrl2;
        }
        
        
        
        
    })
    .error(function(err){
        console.log(err);
    });
    
    $scope.upcomingMovieClicked = function(upcomingMovie){
        console.log(upcomingMovie);
        upcomingMovie.media_type = 'movie'
        resultSelectedService.clickedResult = upcomingMovie;
        $location.path('/result');
    }
    
});