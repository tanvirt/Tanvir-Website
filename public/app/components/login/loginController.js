angular.module('main').controller('LoginController', function($rootScope, $scope, $state) {
	
	/*// App header variables
	$scope.heading = "Template Heading";
	$scope.subheading = "Template subheading.";*/
	$scope.headingImage = "../../assets/img/splash.jpg";

	// Main content starts
	$scope.logIn = function() {
		console.log('login submitted');
		$rootScope.isAdmin = true;
		$state.go('home');
	}

});
