angular.module( 'ngUnicityEnrollment', [
  'templates-app',
  'templates-common',
  'ngUnicityEnrollment.filters',
  'ngUnicityEnrollment.directives',
  'ngUnicityEnrollment.services',  
  'ngUnicityEnrollment.resource',
  'ngUnicityEnrollment.addResource',
  'ngUnicityEnrollment.addCategory',
  'pascalprecht.translate',
  'ngCookies',
  'ui.bootstrap',
  'ngUnicityEnrollment.bootstrap',
  'ui.router',
  'hydraTools'
])

.config( function ngUnicityEnrollmentConfig ( $stateProvider, $urlRouterProvider, $translateProvider, $logProvider) {

    $logProvider.debugEnabled(true);
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/resourceLibrary/resources');
    
    $translateProvider.useLocalStorage();
    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/languages/',
      suffix: '.json'
    });
    // Tell the module what language to use by default and load this file
    $translateProvider.preferredLanguage('en_US');
    $translateProvider.fallbackLanguage('en_US');

})

.run( function run ( countryModel ) {
    if(!countryModel.selectedCountry) {
      countryModel.init();
    }
})

.controller('AppCtrl', function AppCtrl ($rootScope, $log, $window, $scope, $location, $translate, countryModel, $hydraTools ) {
    //if($location.protocol() !== 'https' && $location.protocol() !== 'file' && $location.host() !== 'localhost'){
    //  $window.location.href = 'https:' + '//' + $location.host() + '/#' + $location.url();
    //}
    $rootScope.order = {};

    if($window.localStorage.getItem('order')){
      $rootScope.order=JSON.parse($window.localStorage.getItem('order'));
    }

    $rootScope.$watch('order', function(new_value, old_value){
        $window.localStorage.setItem('order', JSON.stringify($rootScope.order));
    }, true);

    $scope.logOrder=function(){
      $log.debug($rootScope.order);
    };
    $scope.localStorage=function(){
      $log.debug(JSON.parse($window.localStorage.order));
    };

    $scope.settings = {};

    /*if locale is in localStorage, retrieve and set $scope.settings.locale*/
    if($window.localStorage.getItem('locale') && countryModel.selectedCountry.languages !== undefined){
      
        var match = $.parseJSON($window.localStorage.getItem('locale'));
        var thisLocale = $.grep(countryModel.selectedCountry.languages, function(n,i){
            return n.locale === match.locale;
        });
        $scope.settings.locale = thisLocale[0];
  
    //if locale not in localStorage, set locale = first availble array item...
    }else{
        $scope.settings.locale = countryModel.selectedCountry.languages[0];
    }

    $scope.settings.showLanguage = $location.path() == '/resourceLibrary/resources';

    $scope.$on('$stateChangeSuccess', function(event, toState, ToParams, fromState, fromParams){
      if ( angular.isDefined( toState.data.pageTitle ) ) {
        $scope.pageTitle = toState.data.pageTitle + ' | Unicity' ;
      }
    });

    $scope.setLocale = function(locale) {
      $translate.uses(locale.locale);
      $scope.settings.locale = locale;

      //save locale to local storage so it is not lost on hard refresh...
      $window.localStorage.setItem('locale', JSON.stringify($scope.settings.locale));
    };

    $scope.updateLocale = function() {
      $scope.setLocale($scope.settings.locale);
      return $scope.settings.locale;
    };


    $scope.countryModel = countryModel;
    $rootScope.order.country = $rootScope.order.country || countryModel.selectedCountry;

    // init locale after refresh
    if ($rootScope.order.locale !== undefined) {
      $hydraTools.setLocale($rootScope.order.locale);
      $translate.uses($rootScope.order.locale);
    }
          
    $scope.clearLocalStorage = function() {
        $window.localStorage.clear();

        $scope = $rootScope = $window.localStorage = {};
        document.location = 'index.html';
        return false;

      };

      $scope.setBodyClass=function(){
        return $window.localStorage.getItem('NG_TRANSLATE_LANG_KEY');
      };
})

;

