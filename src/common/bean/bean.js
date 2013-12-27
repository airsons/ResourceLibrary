angular.module ('bean', [
])

.service ('$bean', function($q, $timeout) {
  return {
    // new bean is configured with:
    // init_data - which is the initial empty data structure
    // inputConverter - an object, which knows how to convert input into data
    create: function(init_data, inputConverter) {
      var _bean = null;
      var _deferred = $q.defer();
      var _cb = null;

      var _last_input = null;

      function _reset(input) {
      $timeout(function() {
        _bean.complete = false;
        _bean.error = null;
        _bean.data = angular.copy(init_data);
        _bean.input = input;
      });}
      
      function _complete(data, error) {
      $timeout(function() {
         if (error) {
           _bean.error = error;
           _bean.complete = true;
           _deferred.reject(_bean);

           if (_cb !== undefined && _cb !== null) {
             _cb(_bean);
           }
         } else {
           _bean.error = error;
           _.each(data, function(value, key) {
            if (_.contains(_.keys(_bean.data), key)) {
                _bean.data[key] = value;               
            }
           });

            _bean.complete = true;
           _deferred.resolve(_bean);

           if (_cb !== undefined && _cb !== null) {
             _cb(_bean);
           }
         }
      });}

      // this is the public interface
      _bean = {
        complete  : true, // bean is created in complete-state, not "pending"
        set_complete_cb: function (cb) {
          if (cb !== undefined) {
            _cb = cb;
          }
        },
        error     : null,
        input     : null,
        data      : angular.copy(init_data),
        promise   : _deferred.promise,

        updateInput: function(input) {
            // save last passed input
            _last_input = input; // see concurrency note
            _reset(input);

            if (inputConverter !== null) {
                inputConverter(input, _bean, function(data, error) {
                  // checking if this instance matches the last called instance
                  // (_last_input is always the value of last input with which
                  // updateInput was called with, while "input" is the value
                  // of input, for which this particular instance of
                  // inputConverter was called).
                  //
                  // We only want to update (_complete) the bean if it is the
                  // *last* invoked inputConverter which attempts to call
                  // _complete.
                  // 
                  // Scenario:
                  // 1) updateInput with "1"
                  // 2) _last_value is "1"
                  // 3) invoke inputConverter("1")
                  // 4) _last_value is still "1"
                  // 5) inputConverter("1") starts HTTP call
                  // 6) inputConverter("1")'s HTTP call is in progress
                  // 7) updateInput with "2"
                  // 8) _last_value is "2"
                  // 9) invoke inputConverter("2")
                  // 10) inputConverter("2") starts HTTP call
                  // 11) inputConverter("2")'s HTTP call is in progress
                  // 12) inputConverter("1")'s HTTP is still in progress
                  // 13) inputConverter("2")'s HTTP call completes with "good"
                  // 14) compare "2" (which is inputConverter("2")'s input) with _last_value
                  // 15) "2" == _last_value ("2")
                  // 16) update bean with "good"
                  // 17) inputConverter("1")'s HTTP call finally completes with "bad"
                  // 18) compare "1" (which is inputConverter("1")'s input) with _last_value
                  // 19) "1" != _last_value ("2")
                  // 20) DO NOT update bean with "bad"
                  //
                  if (_last_input === input) {
                    _complete(data, error);
                  }
                });
            } else {
                _complete(null, null);
            }
        }
      };

      return _bean;
    }
  };
});
