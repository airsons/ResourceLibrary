angular.module ('waiter', [])

.service ('$waiter', function() {
return {
  build: function(times, success_cb, failure) {
      var finished = 0;
      var successed = 0;

      return function(success) {
        finished += 1;
        if (success) {
          successed += 1;
        }
        
        if (finished == times) {
          if (finished == successed) {
            success_cb();
          } else {
            failure();
          }
        }
  
      };
    }
  };
});
