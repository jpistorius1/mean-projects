var app = angular.module('movieSite.welcome', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {
			controller: "welcome",
			templateUrl: "views/welcome/welcome.tpl.html"
		})
})

app.controller('welcome', function($scope, $http){
    var API_BASE_URL = 'http://api.themoviedb.org/3';
    var API_KEY = '?api_key=cec2b81b22b80f0a38ca51d2c39ef48b';
    var UPCOMING = '/movie/upcoming';
    var RELEASES = '&append_to_response=releases';
    var API_BASE_IMAGE = "http://image.tmdb.org/t/p";
    var API_IMG_SIZE = "/original"; 
    	
    $http.get(API_BASE_URL + UPCOMING + API_KEY + RELEASES)
    .success(function(data){
        var randomMovie = Math.floor(Math.random() * data.results.length);
        var randomMovie2 = Math.floor(Math.random() * data.results.length);
            if(randomMovie2 == randomMovie){
                Math.floor(Math.random() * data.results.length);
            };
        var randomMovie3 = Math.floor(Math.random() * data.results.length);
            if(randomMovie3 == randomMovie2 || randomMovie){
                    Math.floor(Math.random() * data.results.length);
            };
        var posterUrl = data.results[randomMovie].poster_path;
        $scope.posterResult = API_BASE_IMAGE+ API_IMG_SIZE +posterUrl;
        var posterUrl2 = data.results[randomMovie2].poster_path;
        $scope.posterResult2 = API_BASE_IMAGE+ API_IMG_SIZE +posterUrl2;
        var posterUrl3 = data.results[randomMovie3].poster_path;
        $scope.posterResult3 = API_BASE_IMAGE+ API_IMG_SIZE +posterUrl3;
    })
    .error(function(err){
        console.log(err);
    });
})
