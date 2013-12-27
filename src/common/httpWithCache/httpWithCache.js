angular.module ('httpWithCache', [
])

.service ('$httpWithCache', function($http, $q, $cacheFactory, $timeout) {
  var cache = $cacheFactory('$httpWithCache');

  return {
    call: function(config, cacheKey) {
    if (cacheKey !== undefined) {

      var deferred = $q.defer();
      var cacheValue = cache.get(cacheKey);

      if (cacheValue !== undefined) {
        $timeout(function() {
          deferred.resolve(cacheValue);
        });

        return deferred.promise;
      }

      $http(config).then(function(result) {

        cache.put(cacheKey, result);
        deferred.resolve(result);

      }, function(result) {

        deferred.reject(result);

      });

      return deferred.promise;
    }

    return $http(config);
  }
  };
});
