angular.module ('converters.username2exists', [
  'httpWithCache',
  'hydraTools'
])

.service ('username2exists', function($httpWithCache, $hydraTools) {
return {
  converter: function(input, bean, beanCompleteCB) {
    var username = input;

    if (!/^[a-zA-Z0-9]{6,}$/.test(username)) {
      beanCompleteCB(null, null);
      return;
    }

    var request = $hydraTools.requestFactory({
      'type': 'usernameExists',
      'data': {
        'username' : username
      }
    });

    $httpWithCache.call({
      "method"  : 'JSONP',
      "url"     : request.url + '?callback=JSON_CALLBACK',
      "params"  : {"r": request.data}
    }, request.cacheKey).then(function(result) {

      var error = $hydraTools.validateHydraResult(result);

      if (error) {
        beanCompleteCB(null, error);
        return;
      }

      var exists = result.data.responses[0].exists;

      beanCompleteCB({'exists': exists}, null);
    }, function(result) {
      beanCompleteCB(null, 'CONNECTION_ERROR');
    });
  }
};});
