(function () {
    var app = angular.module("atTheMovies");
    app.controller("MovieEditController", function ($scope, $routeParams, editableMovie, movieService, $location) {
        var movieId = $routeParams.id;

        var onError = function (reason) {
            $scope.error = reason;
        };

        $scope.editableMovie = editableMovie;

        $scope.saveRatingToServer = function (movie, rating) {
            movie.rating = rating;
            movieService
                .save(movie)
                .then(function () {
                    return movieService.getAll();
                })
                .then(function (response) {
                    $scope.movies = response.data;
                    $scope.editableMovie = null;
                })
                .catch(onError);
        }

        $scope.save = function (movie) {
            movieService
                .save(movie)
                .then(function () {
                    $location.path("#/list");
                })
                .catch(onError);
        };

        $scope.cancelEdit = function () {
            $scope.editableMovie = null;
            $location.path("#/list");   
        };
    })
}());