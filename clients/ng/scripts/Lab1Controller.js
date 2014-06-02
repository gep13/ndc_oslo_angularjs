var MoviesController = function ($scope) {
    var movies = [
        { title: "Star Wars", length: 120, released: 1981 },
    { title: "Top Gun", length: 90, released: 1984 },
    { title: "Hot Shots", length: 110, released: 1985 }
    ];

    $scope.movies = movies;

    $scope.increaseLength = function ($movie) {
        $movie.length += 1;
    }

    $scope.decreaseLength = function ($movie) {
        $movie.length -= 1;
    }
}