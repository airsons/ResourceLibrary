/* stepperDirective.js */

angular.module('ngUnicityEnrollment.stepper-directive', [])

.directive('stepper', function ($location, $translate) {
    return {
        restrict: 'EA',
        templateUrl: 'stepperDirective/stepper.tpl.html',
        link: function(scope, element, attrs) {
            scope.$location = $location;
            var start = {
                    "name": "selectors_start",
                    "route": "/enroll/start",
                    "active": false,
                    "first": true
                },
                packs = {
                    "name": "selectors_starter_packs",
                    "route": "/enroll/starter-packs",
                    "active": false
                },
                autorefill = {
                    "name": "selectors_auto_refill",
                    "route": "/enroll/auto-refill",
                    "active": false
                },
                account = {
                    "name": "selectors_account_setup",
                    "route": "/enroll/account-setup",
                    "active": false
                },
                payment = {
                    "name": "selectors_payment",
                    "route": "/enroll/payment",
                    "active": false
                };
                summary = {
                    "name": "selectors_summary",
                    "route": "/enroll/summary",
                    "active": false,
                    "last": true
                };
            if (scope.order.dist_type == 'fp') {
              scope.steps = [start, packs, autorefill, account, payment, summary];
            } else if (scope.order.dist_type == 'pc') {
              scope.steps = [start, packs, account, payment, summary];
            }
            var startIdx = 0;
            scope.steps.some( function(element, index, array) {
                if($location.path() === element.route) {
                    element.active = true;
                    startIdx = index + 1;
                    return true;
                }
                else {
                    element.active = true;
                }
            });
            scope.incomplete = scope.steps.splice(startIdx, scope.steps.length - startIdx );
            scope.stepsCount = scope.steps.length + scope.incomplete.length;
        }
    };
});

