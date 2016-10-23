angular.module('main').directive('volunteer', function() {
    var directive = {};

    directive.restrict = 'E'; // restrict this directive to elements
    directive.templateUrl = "/app/components/about/shared/volunteer/volunteerView.html";

    return directive;
});
