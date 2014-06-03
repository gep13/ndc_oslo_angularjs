(function () {
    var movieService = function ($http) {

        return {
            getById: function(id) {
                return $http.get("/api/movies/" + id)
                .then(function (response) {
                    return response.data;
                });
            },
            getAll: function () {
                return $http.get("/api/movies");
            },
            save: function (movie) {
                return $http.put("/api/movies", movie);
            }
        };
    };

    var module = angular.module("atTheMovies");
    module.factory("movieService", movieService);
}());