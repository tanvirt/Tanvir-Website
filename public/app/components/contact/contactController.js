angular.module('main').controller('ContactController', function($scope) {
	
	// App header variables
	$scope.heading = "Contact Me";
	$scope.subheading = "Have questions? I have answers (maybe).";
	$scope.headingImage = "../../assets/img/contact.jpg";

	// Main content starts
	ContactForm.init();
	JqBootStrapValidation.init();

});
