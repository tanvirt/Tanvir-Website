angular.module('main').directive('experience', function() {
    var directive = {};

    directive.restrict = 'E'; // restrict this directive to elements
    directive.templateUrl = "/app/components/about/shared/experience/experienceView.html";

    return directive;
});
