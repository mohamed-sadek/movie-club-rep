myApp.controller('MainController', ['$scope', '$http',
function($scope, $http, $log) {

	$http.get('js/json/data.json').success(function(data) {

		$scope.movie = data;

	}).error(function() {

		$log.warning("Error");

	});

}]);






myApp.controller('NavController', function($scope, $location) {
	$scope.isActive = function(route) {
		return route === $location.path();
	}
});

myApp.controller('ListController', ['$scope', '$http',
function($scope, $http) {

	$http.get('js/json/list.json').success(function(data) {

		$scope.movies = data;
		//Data Retrieved from JSON and saved in data.

		//Target Latest Movie In List.
		$scope.listCount = $scope.movies.length;
		$scope.latestMovieIndex = $scope.listCount - 1;
		$scope.top = 'totalRating';

	});
	
	//Show Clear Filter Button if Filter is active.

	$scope.showClear = function($event) {

		clearStatus = false;

		if ($event.target.id !== "clear_filter") {

			$scope.clearStatus = true;

		} else {

			$scope.clearStatus = false;

		}

	}


}]);

myApp.controller('EditController', ['$scope', '$http',
function($scope, $http) {

	$http.get('js/json/list.json').success(function(data) {

		$scope.movies = data;

	});

}]);
