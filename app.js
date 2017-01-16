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
    //Each controller will have two scope variables.
    $scope.highwayName = "California State Route 1";
    $scope.highwayDescription = "is a major north-south state highway that runs along most of the Pacific coastline of the U.S. state of California. At a total of just over 655.8 miles (1,055.4 km), it is the longest state route in California. Highway 1 has several portions designated as either Pacific Coast Highway (PCH), Cabrillo Highway, Shoreline Highway, or Coast Highway. Its southern terminus is at Interstate 5 (I-5) near Dana Point in Orange County and its northern terminus is at U.S. Highway 101 (US 101) near Leggett in Mendocino County. Highway 1 also at times runs concurrently with US 101, most notably through a 54-mile (87 km) stretch in Ventura and Santa Barbara counties, and across the Golden Gate Bridge.The highway is designated as an All-American Road. In addition to providing a scenic route to numerous attractions along the coast, the route also serves as a major thoroughfare in the Greater Los Angeles Area, the San Francisco Bay Area, and several other coastal urban areas. SR 1 was built piecemeal in various stages, with the first section opening in the Big Sur region in the 1930s. However, portions of the route had several names and numbers over the years as more segments opened. It was not until the 1964 state highway renumbering that the entire route was officially designated as Highway 1. Although SR 1 is a popular route for its scenic beauty, frequent landslides and erosion along the coast have caused several segments to be either closed for lengthy periods for repairs, or re-routed further inland.";

})



app.controller('SecondCtrl', function($scope){
    console.log("SecondCtrl");
    //Each controller will have two scope variables.
    $scope.highwayName = "Blue Ridge Parkway";
    $scope.highwayDescription = "The Blue Ridge Parkway is a National Parkway and All-American Road in the United States, noted for its scenic beauty. The parkway, which is America's longest linear park,[3] runs for 469 miles (755 km) through 29 Virginia and North Carolina counties, mostly along the Blue Ridge, a major mountain chain that is part of the Appalachian Mountains. Its southern terminus is on the boundary between Great Smoky Mountains National Park and the Cherokee Indian Reservation in North Carolina, from which it travels north to Shenandoah National Park in Virginia and offers access to the Skyline Drive. While the two roads join together end-to-end, they are separate and distinct entities, built as two different projects and managed by two different National Park Service units. The Blue Ridge Parkway was built to connect Shenandoah National Park to the Great Smoky Mountains National Park. The parkway, while not a National Park, has been the most visited unit of the National Park System every year since 1946 except two (1949, 2013).[4] Land on either side of the road is owned and maintained by the National Park Service and, in many places, parkway land is bordered by United States Forest Service property. The parkway is on North Carolina's version of the America the Beautiful quarter in 2015";

})
