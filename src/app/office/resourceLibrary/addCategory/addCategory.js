angular.module('ngUnicityEnrollment.addCategory', [
  'ui.router',
  'pascalprecht.translate',
  'hydraService'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'addCategory', {
      url: '/resourceLibrary/add-category',
    views: {
      "main": {
        controller: 'addCategoryCtrl',
        templateUrl: 'resourceLibrary/addCategory/addCategory.tpl.html'
      }
    },
    data:{ pageTitle: 'Add Category' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller('addCategoryCtrl', function addCategoryCtrl($scope, $translate, $location, $hydraService, countryModel) {

    $scope.back = function () {
        $location.path("/resourceLibrary/resources");
    };

    $scope.save = function () {

        alert($scope.categoryName +' '+ " has been added..!!");
        $location.path("/resourceLibrary/resources");
    };
});

