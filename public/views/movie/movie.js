var app = angular.module('movieSite.movie', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/movie', {
			controller: "movie",
			templateUrl: "views/movie/movie.tpl.html"
		})
})

app.controller('movie', function($scope, $http){
    var API_BASE_URL = 'https://api.themoviedb.org/';
    var API_KEY = ' cec2b81b22b80f0a38ca51d2c39ef48b';
	$scope.erik = API_BASE_URL + '/3/movie/550?api_key=' + API_KEY;
    $http.get(API_BASE_URL + '/3/movie/550?api_key=' + API_KEY)
    .success(function(data){
       console.log(data);
    })
    .error(function(err){
        console.log(err);
    });
})


// IMAGES FOR MOVIE PAGES
// to figure out how to make images show: http://docs.themoviedb.apiary.io/#reference/configuration/configuration
// example of a movie image: http://image.tmdb.org/t/p/original/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg

// LIST OF 3 MOVIES PAGE
// http://docs.themoviedb.apiary.io/#reference/lists/get

// GET LATEST MOVIE ID: http://api.themoviedb.org/3/list/id
// GET LIST OF UPCOMING MOVIES: http://docs.themoviedb.apiary.io/#reference/movies/movieupcoming/get

