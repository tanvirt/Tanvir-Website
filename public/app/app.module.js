angular.module('main', [
	"firebase",
	'ui.router'
]);

angular.module('main').run(function($rootScope, $state) {
	// Initialize the Firebase SDK
	var config = {
		apiKey: 'AIzaSyDGr8GXuvponsDzuXZdyW-j4exB2uiKJrk',
		authDomain: 'tanvir-website.firebaseapp.com',
		databaseURL: 'https://tanvir-website.firebaseio.com',
		storageBucket: 'https://tanvir-website.appspot.com'
	};
	firebase.initializeApp(config);

	$rootScope.date = new Date();

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
		if (toState.name == "home") {
			$state.go('home');
		}
		else if(toState.name == 'about') {
			$state.go('about');
		}
		else {
			$state.go('404');
		}
	});
});
