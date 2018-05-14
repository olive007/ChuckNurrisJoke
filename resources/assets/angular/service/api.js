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
