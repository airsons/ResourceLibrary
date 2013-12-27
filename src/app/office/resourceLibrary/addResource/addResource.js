angular.module('ngUnicityEnrollment.addResource', [
  'ui.router',
  'pascalprecht.translate',
  'hydraService',
  'dbService',
  'angularFileUpload'
])

.config(function config( $stateProvider ) {
    $stateProvider.state('addResource', {
        url: '/resourceLibrary/add-resource',
    views: {
      "main": {
        controller: 'addResourceCtrl',
        templateUrl: 'resourceLibrary/addResource/addResource.tpl.html'
      }
    },
    data: { pageTitle: 'Add Resource' }
  });
})

/**
 * And of course we define a controller for our route.
 */
.controller('addResourceCtrl', function addResourceCtrl($scope, $translate, $location, $hydraService,$dbService,$upload,$http, countryModel) {
   
    // load CustomerTypes from JSON

    // this is for Getting tags by Group
    $scope.tagsGroup = $scope.tagsGroup || {};

    //$scope.tags = $scope.tags || {};
    //$scope.tags = $hydraService.getTags();
    //$scope.categories = $dbService.getTags();
    //$scope.categories = $dbService.tags;

    //$scope.tags.set_complete_cb(function () {
    //    if ($scope.tags.data !== null) {           
    //        $scope.tagsGroup = _.groupBy($scope.tags.data.tags, "tagType");            
    //    }
    //});

    //$scope.customerTypes = $scope.customerTypes || {};
    //$scope.customerTypes = $hydraService.getcustomerTypes();

    $scope.categories = $scope.categories || {};
    //Executes when the controller is created    

    $scope.categoriesBean = $hydraService.getCategories();
   // console.log($scope.categoriesBean);
    $scope.categoriesBean.set_complete_cb(function (bean) {
        if (bean.error) {
            alert(bean.error);
           
        } else if (bean.data !== null) {
            $scope.categoriesBean = bean.data.categories;
            console.log($scope.categoriesBean);
        }
    });

    $scope.order.resource = $scope.order.resource || {};
    $scope.account = $scope.order.resource;    

    $scope.resourceBean = $hydraService.getResources($scope.order);
    $scope.resourceBean.set_complete_cb(function () {
        if ($scope.resourceBean.data !== null) {
            $scope.account = $scope.resourceBean.data.resources[0];
            if ($scope.account !== undefined) {
                $scope.account.CategoryID = $scope.account.CategoryID.toString();
                console.log($scope.account);
            }
            else {
                $scope.account = $scope.account || {};
                $scope.account.CategoryID = "1";
                $scope.account.resourceType = "0";
            }
        }        
    });   
    $scope.onFileSelect = function ($files) {
        $scope.file=$files;
    };
    $scope.back = function () {

        $location.path("/resourceLibrary/resources");
    };

    $scope.save = function () {

        if ($scope.account.CategoryID !== null || $scope.account.CategoryID !== undefined) {

            $scope.upload = $upload.upload({
                url: 'http://localhost:3000/upload-file',
                method: 'POST',
                withCredential: true,
                data: { id: $scope.account.CategoryID, name: $scope.file.name },
                file: $scope.file
                //fileFormDataName: $file.name
                //formDataAppender: function(formData, key, val){} 
            }).success(function (data, status, headers, config) {
                //alert(status);
                alert("Resources have been updaed..!!");
            }).error(function (data, status, headers, config) { alert(data); });
        }
       console.log($scope.account);
        //alert("Resources have been updaed..!!");
        $location.path("/resourceLibrary/resources");
    };
});