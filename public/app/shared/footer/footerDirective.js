angular.module('main').directive('appfooter', function($rootScope) {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */
    directive.templateUrl = "/app/shared/footer/footerView.html";

    return directive;
});
