(function () {
    var module = angular.module("atTheMovies", []);

    module.run(function ($rootScope) {
        $rootScope.version = "v1.0";
    })
}());