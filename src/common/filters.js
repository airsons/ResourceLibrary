/* Filters */

angular.module('ngUnicityEnrollment.filters',[])

.filter('removeWsLowercase', function () {
    return function (text) {
        var str = text.replace(/\s+/g, '');
        return str.toLowerCase();
    };
})

.filter('mask', function(){
	return function(text, cc){
		if(!angular.isDefined(text)){
			return text;
		}
		var len = text.length;
		var str="•";

		if(cc){len = len-4;}

		for (var i=1; i<len; i++){
			str+="•";
		}

		if(cc){
			str+=text.slice(-4);
		}
		return str;
	};
})

.filter('distType', function($translate){
	return function(text){
		if(text==="pc") {return $translate("summary_dist_type_pc");}
		else{ return $translate("summary_dist_type_fp");}
	};
})


;