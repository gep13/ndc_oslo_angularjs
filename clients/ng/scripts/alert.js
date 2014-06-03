(function () {
    var module = angular.module("atTheMovies");
    module.directive("alert", function () {
        return {
            restrict: "EA",
            transclude: true,
            templateUrl: "views/alert.html",
            scope: {
                type: "@",
                reason: "=",
                close: "&"
            },
            replace: true,
            };
    })
}());
