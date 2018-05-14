cnApp.controller('IndexCtrl', ['$scope', 'api', 'data', function IndexCtrl($scope, api, data) {
	$scope.data = data;

	// load form api
	api.loadJoke();
	api.loadCategoryList();

	$scope.newJoke = function() {
		api.loadJoke();
	};

	$scope.back = function() {
		api.loadJoke();
	};

	$scope.top = function($number) {
		api.loadTop($number);
	};

}]);
