angular.module('dbService', [
  'bean',
  'converters.username2exists',
  'converters.categoriesConverter',
  'converters.customerTypesConverter',
  'converters.resourcesConverter',
  'converters.tagsConverter'
])

.service('$dbService', function ($bean, $injector) {
    /* PUBLIC */
    return {

        getCategories: function () {
           // console.log("getCategories");
            var categoriesBean = $bean.create({
                'categories': null
            }, $injector.get('categoriesConverter').converter);
            
            categoriesBean.updateInput();
            return categoriesBean;
        }

    };
});