angular.module('converters.tagsConverter', [
  'hydraTools',
  'tagsJSON'
])

.service('tagsConverter', function ($http, $injector, $hydraTools, $tagsJSON) {
    return {
        converter: function (order, bean, beanCompleteCB) {
            var tags = $tagsJSON.get();
            beanCompleteCB({
                'tags': tags
            }, null);
        }
    };
});