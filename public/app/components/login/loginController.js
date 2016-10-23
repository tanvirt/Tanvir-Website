angular.module('main').controller('LoginController', function($rootScope, $scope, $state, $firebaseAuth) {

	$scope.authObj = $firebaseAuth();

	$scope.error = "";

	$scope.logIn = function() {
		try {
			$scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password)
			.then(function(firebaseUser) {
				$rootScope.isAdmin = true;
				$state.go('home');
			})
			.catch(function(error) {
		  		$scope.error = "Authentication failed";
			});
		}
		catch(error) {
			$scope.error = "Authentication failed";
		}
	}

});
