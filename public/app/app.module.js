angular.module('main', [
	"firebase",
	'ui.router'
]);

angular.module('main').run(function($rootScope, $state) {

	Theme.init();

	// Initialize the Firebase SDK
	var config = Client.getFirebaseConfig();
	firebase.initializeApp(config);

	$rootScope.date = new Date();
	$rootScope.isAdmin = false;

	$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams) {
		if(toState.name == "home") {
			$state.go('home');
		}
		else if(toState.name == 'about') {
			$state.go('about');
		}
		else if(toState.name == 'contact') {
			$state.go('contact');
		}
		else if(toState.name == 'login') {
			$state.go('login');
		}
		else if(toState.name == 'admin' && $rootScope.isAdmin) {
			$state.go('admin');
		}
		else {
			$state.go('404');
		}
	});

});
