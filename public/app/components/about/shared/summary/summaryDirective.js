angular.module('main').directive('summary', function() {
    var directive = {};

    directive.restrict = 'E'; // restrict this directive to elements
    directive.templateUrl = "/app/components/about/shared/summary/summaryView.html";

    return directive;
});
