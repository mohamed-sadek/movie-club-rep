var myApp = angular.module('myApp', [
  'ngRoute',
  'ngAnimate'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/movie_list.html',
    controller: 'ListController'
  }). 
  when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'ListController'
  }).
  when('/rules', {
    templateUrl: 'partials/rules.html',
    controller: 'MainController'
  }).
    when('/topten', {
    templateUrl: 'partials/top10.html',
    controller: 'ListController'
  }).
  when('/add', {
    templateUrl: 'partials/add.html',
    controller: 'EditController'
  }).
  when('/blog', {
    templateUrl: 'partials/blog.html',
    controller: 'MainController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);