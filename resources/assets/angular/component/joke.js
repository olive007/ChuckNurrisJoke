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
