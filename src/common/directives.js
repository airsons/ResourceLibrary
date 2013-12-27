/* Directives */

angular.module('ngUnicityEnrollment.directives', ['ngUnicityEnrollment.stepper-directive', 'ngUnicityEnrollment.validation-directives', 'ngUnicityEnrollment.xeditable-directives'])

.directive('zxcvbn', function(){

    return{
        restrict:'A',
        link:function(scope, element, attrs){
            element.focus(function(){
                $("#password2").val('');
            });
            element.keyup(function(){
                var pw = $(this).val();
            
                if(pw.length < 6){
                    level = "progress-danger";
                    status = "Poor";
                }else if(pw.length >= 6 && pw.length < 7){
                    level = "progress-warning";
                    status = "Ok";
                }else if(pw.length >= 7 && pw.length < 8){
                    level = "progress-success";
                    status = "Good";
                }else if(pw.length >= 8){
                    level = "progress-success complete";
                    status = "Great";
                }

                $(".password-strength").removeClass().addClass("progress password-strength " + level);
                $(".password-status").text(status);
            });
        }
    };
})

.directive('myDownload', function ($compile) {
    return {
        restrict:'E',
        scope:{ data: '=' },
        link:function (scope, elm, attrs) {
            function getUrl(){
                return URL.createObjectURL(new Blob([JSON.stringify(scope.data)], {type: "application/json"}));
            }
            
            elm.append($compile(
                    '<a  class="btn btn-success span12" download="backup.json"' +
                    'href="' + getUrl() + '">' +
                    'Download' +
                    '</a>'
            )(scope));
     
            scope.$watch(scope.data, function(){
                elm.children()[0].href = getUrl();
            });
        }
    };
})

//TODO: pwmatch needs to be integrated in form validation directive

.directive('pwmatch', function(){
    return{
        restrict:'A',
        link:function(scope, element, attrs){
            element.keyup(function(){
                var currentPw = $(attrs.pw).val();
                var pwStatus =  $(".password-match");
                if(currentPw == element.val()){
                        pwStatus.text("Match").removeClass('error').addClass('success');
                }else{
                    pwStatus.text("No Match").removeClass('success').addClass('error');
                
                }

            });
        }
    };
})

.directive('unmaskpw', function($translate){

return{
        restrict:'A',
        link:function(scope, element, attrs){
            var text;
            var labelSpan = element.find('span');
            var toggleBox = element.find('input');
            var check = 0;
            toggleBox.click(function(){
                check+=1;
                if(check % 2){
                    $(attrs.unmask).attr('type', 'text');
                    text = $translate(attrs.pwmaskUpdated);
                    labelSpan.text(text);
                }else{
                    $(attrs.unmask).attr('type', 'password');
                    text = $translate(attrs.pwmaskOtext);
                    labelSpan.text(text);
                }

            });
            
        }

    };
})


.directive('ngFocus', function($parse) {
    return function(scope, element, attr) {
        var fn = $parse(attr['ngFocus']);
        element.bind('focus', function(event) {
            scope.$apply(function() {
                fn(scope, {$event:event});
            });
        });
    };
})
 
.directive('ngBlur', function($parse) {
    return function(scope, element, attr) {
        var fn = $parse(attr['ngBlur']);
        element.bind('blur', function(event) {
            scope.$apply(function() {
                fn(scope, {$event:event});
            });
        });
    };
})

.directive('summarypanel', function() {
  return {
    link: function($scope) {
      $scope.sum_items_price = function(items) {
        var sum = 0;

        _.each(items, function(item) {
          sum = sum + parseFloat(item.qty)*parseFloat(item.product.price);
        });

        return sum;
      };

      $scope.sum_items_pv = function(items) {
        var sum = 0;

        _.each(items, function(item) {
          if (item.product.pv !== undefined) {
            sum = sum + parseFloat(item.qty)*parseFloat(item.product.pv);
          }
        });

        return sum;
      };
    },
    templateUrl: 'enroll/module/summary.tpl.html',
    scope: true,
    restrict: 'E'
  };
})

.directive('t', function (){
    return{
        restrict: 'E',
        transclude: true,
        template: "<translate ng-transclude></translate>"
    };
})

;

