angular.module('converters.resourcesConverter', [
  'hydraTools',
  'resourcesJSON'
])

.service('resourcesConverter', function ($http, $injector, $hydraTools, $resourcesJSON) {
    return {
        converter: function (order, bean, beanCompleteCB) {           
            var resources = $resourcesJSON.get();           
            if (order.categoryID > 0) {
                resources = _.filter(resources, function (obj) { return obj.CategoryID === parseInt(order.categoryID,10); });
            }
            if (order.resourceID > 0) {
                resources = _.filter(resources, function (obj) { return obj.resourceID === parseInt(order.resourceID, 10); });
            }
            beanCompleteCB({
                'resources': resources
            }, null);
        }
    };
});