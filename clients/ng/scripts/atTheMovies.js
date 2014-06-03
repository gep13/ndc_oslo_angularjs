(function () {
    var module = angular.module("atTheMovies", ["ngRoute", "ngAnimate"]);

    module.config(function ($provide) {
        $provide.decorator("$exceptionHandler", function ($delegate) {
            return function (reason, cause) {
                $delegate(reason, cause);
                alert(reason);
            }
        })
    })

    module.config(function ($routeProvider) {
        $routeProvider
            .when("/list", {
                templateUrl: "views/list.html",
                controller: "MovieListController"
            })
        .when("/edit/:id", {
            templateUrl: "views/edit.html",
            controller: "MovieEditController",
            resolve: {
                editableMovie: function (movieService, $route) {
                    var id = $route.current.params.id;
                    return movieService.getById(id);
                }
            }
        })
        .otherwise({
            redirectTo: "/list"
        });
    });

    module.run(function ($rootScope) {
        $rootScope.appConfig = {
            version: "v1.1"
        };
    })
}());