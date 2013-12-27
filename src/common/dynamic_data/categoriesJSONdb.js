angular.module('categoriesJSONdb', [])

.service('$categoriesJSONdb', function () {
    var categories = {};
//    $http.get("http://localhost:3000/get-categories")
//.then(function (results) {    
//    categories = results.data;    
//}, function (results) {
    
//    console.log("Error: " + results.data + "; " + results.status);
//});

    return {
        get: function ($http) {
            $http.get("http://localhost:3000/get-categories")
.then(function (results) {
    
    return results.data;
}, function (results) {

    console.log("Error: " + results.data + "; " + results.status);
});
            //return categories;
        }
    };
});