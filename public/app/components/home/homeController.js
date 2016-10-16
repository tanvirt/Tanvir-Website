angular.module('main').controller('HomeController', function($scope, $firebaseArray) {
	
	// App header variables
	$scope.heading = "Home Heading";
	$scope.subheading = "Home subheading.";
	$scope.headingImage = "../../assets/img/splash.jpg";

	var ref = firebase.database().ref().child("messages");

	// create a synchronized array
	$scope.messages = $firebaseArray(ref);

	// add new items to the array
	// the message is automatically added to our Firebase database!
	$scope.addMessage = function() {
		$scope.messages.$add({
			text: $scope.newMessageText
		});
	};

});