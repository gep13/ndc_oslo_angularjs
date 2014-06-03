(function () {

    var MoviesController = function ($scope, movieService, $log) {

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        }

        $scope.alerts = [
            {
                type: "warning",
                message: "This is a warning from Movie Controller",
                reason: ""
            },
            {
                type: "info",
                message: "This is an info",
                reason: ""
            },
        ]
        ;
        var onMovies = function (response) {
            $scope.movies = response.data;
        };

        var onError = function (reason) {
            $scope.error = "There was a problem";
        };

        movieService.getAll()
            .then(onMovies, onError);

        $scope.changeAlert = function () {
            $scope.alert.type = "info";
            $scope.alert.message = "this is some info";
            $scope.alert.reason = "reset";
        };

        $scope.increase = function (movie) {
            movie.rating += 1;
        };

        $scope.decrease = function (movie) {
            movie.rating -= 1;
        };

        $scope.saveRatingToServer = function (movie, rating ) {
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

        $scope.edit = function (movie) {
            $scope.editableMovie = angular.copy(movie);
        };

        $scope.save = function (movie) {
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
        };

        $scope.cancelEdit = function () {
            $scope.editableMovie = null;
        };
    };

    var module = angular.module("atTheMovies");
    module.controller("MoviesController", MoviesController);

}());