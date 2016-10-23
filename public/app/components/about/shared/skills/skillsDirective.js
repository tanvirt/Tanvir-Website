angular.module('main').directive('skills', function() {
    var directive = {};

    directive.restrict = 'E'; // restrict this directive to elements
    directive.templateUrl = "/app/components/about/shared/skills/skillsView.html";

    return directive;
});
