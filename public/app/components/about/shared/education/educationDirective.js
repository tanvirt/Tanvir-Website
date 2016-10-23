angular.module('main').directive('education', function() {
    var directive = {};

    directive.restrict = 'E'; // restrict this directive to elements
    directive.templateUrl = "/app/components/about/shared/education/educationView.html";

    return directive;
});
