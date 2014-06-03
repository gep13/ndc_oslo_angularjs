(function () {

    var MovieListController = function ($scope, movieService, $log) {

        var onMovies = function (response) {
            $scope.movies = response.data;
        };

        var onError = function (reason) {
            $scope.error = "There was a problem";
        };

        movieService.getAll()
            .then(onMovies, onError);

    };

    var module = angular.module("atTheMovies");
    module.controller("MovieListController", MovieListController);

}());