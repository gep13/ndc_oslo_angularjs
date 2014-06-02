(function () {
    var module = angular.module("atTheMovies", []);

    module.run(function ($rootScope) {
        $rootScope.appConfig = {
            version: "v1.1"
        };
    })
}());