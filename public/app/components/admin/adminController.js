angular.module('main').controller('AdminController', function($rootScope, $scope, $state, $firebaseAuth) {
	
	// App header variables
	$scope.heading = "Admin Heading";
	$scope.subheading = "Admin subheading.";
	$scope.headingImage = "../../assets/img/splash.jpg";

	$scope.authObj = $firebaseAuth();

	$scope.signOut = function() {
		$scope.authObj.$signOut();
		$rootScope.isAdmin = false;
		$state.go('home');
	}

});
