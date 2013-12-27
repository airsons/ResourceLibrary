angular.module('ngUnicityEnrollment.xeditable-directives',[])


.directive('xeditable', ['$timeout', '$window', 'xeditLanguages',function($timeout, $window, xeditLanguages){
return{
        restrict: 'A',
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {       

            var  attrOptions, attrSelIdx;

            attrs.$observe('xeditableSource', function(value){
             if(value){
                attrOptions = value;
               if(angular.isDefined(attrSelIdx)){

                $timeout(function() {
                            loadXeditable(attrOptions, attrSelIdx);
                        }, 10);  
                    } 
             }else{

                $timeout(function() {
                            loadXeditable(null, null);
                        }, 10);  

             }
               
              });

            
            attrs.$observe('xeditableSelIdx', function(value){
                if(value){
                  
                  attrSelIdx=value;

                  if(angular.isDefined(attrOptions)){
                    $timeout(function() {
                            loadXeditable(attrOptions, attrSelIdx);
                        }, 10);  
                    }
                  

                  }else{
                    $timeout(function() {
                            loadXeditable(attrOptions, null);
                        }, 10);  
                    }
                  
                    
                });
            

            /*--Load x-editable--*/
            var loadXeditable = function(options, selIdx) {
                
                var language= $window.localStorage.getItem('NG_TRANSLATE_LANG_KEY');
                language = language.split("_");
                language = language[0];
                
                    $.fn.datepicker.dates[language] = xeditLanguages.translations[language]; 
                

                element.editable({
                    display: function(value, srcData) {
                           
                        //--if a date field then...--//
                           if(attrs.xeditableDate)  {
                            var oldDateMili=  Date.parse(value);
                            var oldDate = new Date(oldDateMili);
                            var offset = oldDate.getTimezoneOffset()*60*1000;
                            var newDateMili = oldDateMili+offset;
                             

                            var newDate = new Date(newDateMili);                                       
                            
                            var mm = newDate.getMonth()+1;
                            var dd = newDate.getDate();
                            var yyyy = newDate.getFullYear();
                            if(dd<10){dd='0'+dd;}
                            if(mm<10){mm='0'+mm;}
                            var newValue = mm+"/"+dd+"/"+yyyy;
                            
                            ngModel.$setViewValue(newValue);

                            scope.$apply();
                            //otherwise treat as non-date field
                            }else{
                                ngModel.$setViewValue(value);
                                scope.$apply();

                            }
                                                                },
                    mode:'inline',
                    source:options,
                    value:selIdx,
                    datepicker:{
                         language:language
                     },
                    
                    validate:function(value){
                        //not empty validation
                        if(attrs.xeditNoempty){
                            if($.trim(value)===''){ return 'This field is required';}
                        }
                        //date validation
                        if(attrs.xeditDate){
                            value = $.trim(value);
                            if(isNaN(Date.parse(value))){
                                return "Please supply a valid date";
                            }
                        }

                        //min length validation
                        if(attrs.xeditMinlength){
                            if(value.length<attrs.xeditMinlength){
                                return "Minimum length is "+attrs.xeditMinlength+" characters";
                            }
                        }

                        //phone validation
                        if(attrs.xeditPhone){
                            var numbers = value.replace(/[^0-9]/g,"");
                            if(numbers.length<attrs.xeditPhone){
                                return "Minimun phone number length is "+attrs.xeditPhone+" digits";
                            }
                        }
                        //integer only validation
                        if(attrs.xeditNumeric){
                            if(value.match(/[A-z]/g)){
                                return "Alphabetical characters not permitted";
                            }
                        }
                        //email validation
                        if(attrs.xeditEmail){
                            if(!value.match("@")){
                                return "Please provide a valid email address";
                            }
                        }
                        
                    },
                    succes:function(response, newValue){
                        //save newValue to $rootScope.[some property here]
                    }
                    
                });   
            };
                

            
        }
    };
            
}]);

