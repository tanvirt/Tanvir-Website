angular.module('main').controller('AdminController', function($rootScope, $scope, $state, $firebaseArray, $firebaseAuth) {
	
	// App header variables
	$scope.heading = "Admin Heading";
	$scope.subheading = "Admin subheading.";
	$scope.headingImage = "../../assets/img/splash.jpg";

	var ref = firebase.database().ref().child("messages");

	// create a synchronized array
	$scope.messages = $firebaseArray(ref);
	$scope.authObj = $firebaseAuth();

	$scope.signOut = function() {
		$scope.authObj.$signOut();
		$rootScope.isAdmin = false;
		$state.go('home');
	}

});
