angular.module('main').directive('projects', function() {
    var directive = {};

    directive.restrict = 'E'; // restrict this directive to elements
    directive.templateUrl = "/app/components/about/shared/projects/projectsView.html";

    return directive;
});
