angular.module ('hydraService', [
  'bean', 
  'converters.username2exists',
  'converters.categoriesConverter',
  'converters.customerTypesConverter',
  'converters.resourcesConverter',
  'converters.tagsConverter'
])

.service('$hydraService', function ($bean, $injector) {
    /* PUBLIC */
    return {
        getTags: function () {
            var tagsBean = $bean.create({
                'tags': null
            }, $injector.get('tagsConverter').converter);

            tagsBean.updateInput();
            return tagsBean;
        },
        //get categories
        getCategories: function () {
            var categoriesBean = $bean.create({
                'categories': null
            }, $injector.get('categoriesConverter').converter);

            categoriesBean.updateInput();
            return categoriesBean;
        },

        getcustomerTypes: function () {
            var customerTypesBean = $bean.create({
                'customerTypes': null
            }, $injector.get('customerTypesConverter').converter);
            customerTypesBean.updateInput();
            return customerTypesBean;
        },

        getResources: function (order) {
            var resourcesBean = $bean.create({
                'resources': null
            }, $injector.get('resourcesConverter').converter);

            resourcesBean.updateInput(order);
            return resourcesBean;
        },

        resourceBean: function (cateoryID) {
            return $bean.create({
                'title': null,
                'description': null,
                'youtube_url': null
            }, $injector.get('resourceCreatBean').converter);
        },

        username2existsBean: function (email) {
            return $bean.create({
                'exists': null
            }, $injector.get('username2exists').converter);
        },

        addResources: function (order) {
            return $bean.create({
                'exists': null
            }, $injector.get('username2exists').converter);
        }
    };
});