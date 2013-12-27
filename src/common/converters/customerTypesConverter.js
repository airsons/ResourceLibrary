angular.module('converters.customerTypesConverter', [
  'hydraTools',
  'customerTypesJSON'
])

.service('customerTypesConverter', function ($http, $injector, $hydraTools, $customerTypesJSON) {
    return {
        converter: function (order, bean, beanCompleteCB) {
            var customerTypes = $customerTypesJSON.get();
            beanCompleteCB({
                'customerTypes': customerTypes
            }, null);
        }
    };
});