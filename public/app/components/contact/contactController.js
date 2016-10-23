angular.module('main').controller('ContactController', function($scope, $firebaseArray) {

	// App header variables
	$scope.heading = "Contact Me";
	$scope.subheading = "Have questions? I have answers (maybe).";
	$scope.headingImage = "../../assets/img/contact.jpg";

	var ref = firebase.database().ref().child("messages");

	// create a synchronized array
	var messages = $firebaseArray(ref);

	var listener = new ContactFormListener("ContactController");
	listener.onSubmitSuccess = function(firstName, name, email, phone, message) {
		// add new items to the array
		// the message is automatically added to the Firebase database!
		messages.$add({
			name: name,
			email: email,
			phone: phone,
			text: message
		});
	}

	JqBootStrapValidation.init();
	ContactForm.addListener(listener);
	ContactForm.init();

});
