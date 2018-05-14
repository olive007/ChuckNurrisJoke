// Define the `phonecatApp` module
var cnApp = angular.module('cnApp', ['ui.bootstrap', 'ngResource'], function($interpolateProvider) {
  $interpolateProvider.startSymbol('<%');
  $interpolateProvider.endSymbol('%>');
});

cnApp.service('api', [ '$http', 'data', function($http, data) {

	var scope = {};

	var BASE_URL_CN = "https://api.chucknorris.io/jokes";
	var BASE_URL_MY = "http://192.168.56.4/api";

	scope.searchJoke = function(query, callback) {
		data.jokeList = [];
		data.jokeListTitle = "Result with '"+query+"'";
		$http.get(BASE_URL_CN+'/search?query='+query).then(function(response) {
			data.jokeList = response.data.result;
			for (var i = data.jokeList.length; --i >= 0;) {
				$http.get(BASE_URL_MY+"/rank/"+data.jokeList[i].id).then(function(response) {
					data.jokeList[i].rank = response.data;
				});
			};
			callback()
		});
	};

	scope.loadJoke = function(category) {
		data.joke = null;
		data.jokeList = [];
		data.topList = [];
		if (category != null) {
			$http.get(BASE_URL_CN+'/random?category='+category).then(function(response) {
				data.joke = response.data;
				data.joke.rank = 0;
				$http.get(BASE_URL_MY+"/rank/"+data.joke.id).then(function(response) {
					data.joke.rank = response.data;
				});
			});
		}
		else {
			$http.get(BASE_URL_CN+'/random').then(function(response) {
				data.joke = response.data;
				data.joke.rank = 0;
				$http.get(BASE_URL_MY+"/rank/"+data.joke.id).then(function(response) {
					data.joke.rank = response.data;
				});
			});
		}
	}

	scope.loadCategoryList = function() {
		data.categoryList = [];
		$http.get(BASE_URL_CN+'/categories').then(function(response) {
			data.categoryList = response.data;
		});
	}

	scope.increaseJokeRank = function(id, callback) {
		$http.post(BASE_URL_MY+'/vote/'+id).then(function(response) {
			$http.get(BASE_URL_MY+'/rank/'+id).then(function(response) {
				callback(response.data);
			});
		});
	}

	scope.decreaseJokeRank = function(id, callback) {
		$http.delete(BASE_URL_MY+'/vote/'+id).then(function(response) {
			$http.get(BASE_URL_MY+'/rank/'+id).then(function(response) {
				callback(response.data);
			});
		});
	}

	scope.loadTop = function(number) {
		data.jokeList = [];
		data.jokeListTitle = "Top "+number+" !";
		$http.get(BASE_URL_MY+'/top/'+number).then(function(response) {
			data.topList = response.data;
		});
	};

	return scope;

}]);

cnApp.service('data', function() {

	var scope = {};

	// Initialize variable
	scope.joke = null;
	scope.jokeList = [];
	scope.categoryList = [];
	scope.topList = [];

	return scope;

});

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

cnApp.component('categoryList', {
	templateUrl: 'tmpl/categoryList.html',
	controller: ['$http', 'api', 'data', function CategoryListController($http, api, data) {

		this.data = data;

		if (data.categoryList == null) {
			api.loadCategoryList();
		}

		this.changeJoke = function(category) {
			api.loadJoke(category)
		}
	}]
});

cnApp.component('joke', {
	templateUrl: 'tmpl/joke.html',
	controller: ['$scope', 'api', function JokeController($scope, api) {
		$scope.enable = true;
		$scope.setRank = function(arg) {
			$scope.$ctrl.j.rank = arg;
			$scope.enable = true;
		}
		$scope.upVote = function() {
			$scope.enable = false;
			api.increaseJokeRank($scope.$ctrl.j.id, $scope.setRank);
		}
		$scope.downVote = function() {
			$scope.enable = false;
			api.decreaseJokeRank($scope.$ctrl.j.id, $scope.setRank);
		}
	}],
	bindings: {
		j: '='
	}
});

cnApp.component('search', {
	templateUrl: 'tmpl/search.html',
	controller: ['api', 'data', function SearchController(api, data) {
		var self = this;

		this.query = "";
		self.enable = true;

		self.renable = function() {
			self.enable = true;
		}

		this.search = function() {
			self.enable = false;
			api.searchJoke(self.query, self.renable);
		}
	}]
});
