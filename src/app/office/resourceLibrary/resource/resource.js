angular.module('ngUnicityEnrollment.resource', [
  'ui.router',
  'pascalprecht.translate',
  'hydraService'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(function config( $stateProvider ) {
  $stateProvider.state( 'resource', {
      url: '/resourceLibrary/resources',
    views: {
      "main": {
        controller: 'resourceCtrl',
        templateUrl: 'resourceLibrary/resource/resource.tpl.html'
      }
    },
    data:{ pageTitle: 'ResourceLibrary' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller('resourceCtrl', function resourceCtrl($scope, $translate, $location, $hydraService, $dialog, countryModel) {

    $scope.openDialog = function (opts) {
        var d = $dialog.dialog(opts);
        return {
            dialog: d,
            promise: d.open()
        };
    };

    // Load Categories from JSON
    $scope.categories = $scope.categories || {};
    $scope.categories = $hydraService.getCategories();

    $scope.resources = $scope.resources || {};
    $scope.showResources = function (categoryID, resourceID) {
        $scope.order.categoryID = categoryID;
        $scope.order.resourceID = resourceID;
        $scope.resources = $hydraService.getResources($scope.order);

        $scope.resources.set_complete_cb(function () {
            if ($scope.resources.data !== null) {
                $scope.resourcesGroup = _.groupBy($scope.resources.data.resources, "CategoryName");               
            }
        });
    };

    if ($scope.categoryID === undefined) {
        $scope.showResources(0);
    } 
    
    $scope.addCat = function () {
        $location.path("/resourceLibrary/add-category");
    };

    $scope.addRes = function () {
        $location.path("/resourceLibrary/add-resource");
    };

    $scope.editResource = function (categoryID, resourceID) {
        $scope.order.categoryID = categoryID;
        $scope.order.resourceID = resourceID;  
        $location.path("/resourceLibrary/add-resource");
    };

    $scope.deleteResource = function (resourceID, title) {
        $scope.openDialog({
            backdrop: true,
            keyboard: true,
            backdropClick: false,
            templateUrl: 'resourceLibrary/modal/modal.tpl.html',
            controller: ['$scope', 'dialog', function ($scope, dialog) {
                $scope.title = $translate('delete_modal_title') + 'resource '+ title + '.';
                $scope.message = $translate('delete_modal_warning') + 'resource '+ title + ' ?';
                $scope.btn = true;
                $scope.btnlabel = $translate('global_ok');
                $scope.btnCancel = $translate('global_cancel');
                $scope.close = function () {
                    dialog.close();
                };
                $scope.ok = function () {
                    // delete resource
                };
            }]
        });
    };
});