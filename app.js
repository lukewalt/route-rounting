console.log("welcome to route routing");

//Inject ngRoute into your applcation
var app = angular.module('RouteRounting', ['ngRoute'])


// config section for your application where you set up two routes.
app.config(function($routeProvider){
    //Famous highway #1
    $routeProvider.when('/', {
        controller: 'MainCtrl',
        templateUrl: 'partials/highwayone.html'
    //Famous highway #2
    }).when('/highwaytwo', {
        controller: 'SecondCtrl',
        templateUrl: 'partials/highwaytwo.html'
    })
})

// Two controllers defined in your application
app.controller('MainCtrl', function($scope){
    console.log("MainCtrl");
    $scope.highway = "Route 1"
})

app.controller('SecondCtrl', function($scope){
    console.log("SecondCtrl");
    $scope.highway = "Blue Ridge Parkway"

})
