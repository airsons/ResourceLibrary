angular.module('converters.categoriesConverter', [
  'hydraTools',
  'httpWithCache'
])

.service('categoriesConverter', function ($http, $injector, $httpWithCache, $hydraTools) {
    return {
        converter: function (bean, beanCompleteCB) {
           
            $httpWithCache.call({
                "method": 'GET',
                "url": 'http://localhost:3000' + '/get-categories'                
            }, request.cacheKey).then(function (result) {
                
                var error = $hydraTools.validateHydraResult(result);

                if (error) {
                    beanCompleteCB(null, error);
                    console.log(error);
                    return;
                }

                beanCompleteCB({
                    'categories': result.data
                }, null);

            }, function (result) {
                beanCompleteCB(null, 'CONNECTION_ERROR');
            });
        }
    };
});