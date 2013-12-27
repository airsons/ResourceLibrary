function makeid(length)
{
    var text = "";
    var possible = "ABCDEFGHJKLMNPRSTUVWXYZ0123456789";

    for( var i=0; i < length; i++ ) {
        var c = possible.charAt(Math.floor(Math.random() * possible.length));
        text += c;
    }

    return text;
}

function setCookie(c_name,value,exdays)
{
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
var c_value = document.cookie;
var c_start = c_value.indexOf(" " + c_name + "=");
if (c_start == -1)
  {
  c_start = c_value.indexOf(c_name + "=");
  }
if (c_start == -1)
  {
  c_value = null;
  }
else
  {
  c_start = c_value.indexOf("=", c_start) + 1;
  var c_end = c_value.indexOf(";", c_start);
  if (c_end == -1)
  {
c_end = c_value.length;
}
c_value = unescape(c_value.substring(c_start,c_end));
}
return c_value;
}
angular.module ('hydraTools', [
])

.service ('$hydraTools', function() {
  var device_id = getCookie('device_id');
  if (device_id) {
  } else {
    device_id = makeid(3);
    setCookie('device_id', device_id, 1000);
  }

  var _country = 'US';
  var _language = 'en';
  var _transactionID = 0;

  return {
    requestFactory: function(params) {
      var type = params.type;
      var data = params.data;
  
      _transactionID += 1;
  
      var cacheKey = type;
  
      var request = {
        "url"   : '//hydra.unicity.net/index.php/ws/v4/' +
                  type + '.jsonp',
        "data"  : {
          "transactionId"   : _transactionID,
          "requestType"     : type,
          "requestVersion"  : "1",
          "sessionToken"    : "",
          "requestObj"      : {
            "applicationVersion"  : "0.1.0", // TODO: get from package.json 
            "applicationId"       : "com.unicity.mobile.UnicityMobileOffice", // TODO: get from package.json
            "country"             : _country,
            "deviceId"            : device_id
          }
        }
      };

      if (location.hostname == 'localhost') {
        request.data.dev = true;
      }
  
      cacheKey += "::" + _country + "::";
  
      for (var property in data) {
        if (data.hasOwnProperty(property)) {
          request.data.requestObj[property] = data[property];
        }
      }

      cacheKey += JSON.stringify(data);
  
      request.cacheKey = cacheKey;

      return request;
    },

    requestFactoryObject: function (params) {
        var url = params.url;
        var data = params.data;

        _transactionID += 1;

        var cacheKey = type;

        var request = {
            "url": url,
            "data": data
        };

        cacheKey += "::" + _country + "::";

        for (var property in data) {
            if (data.hasOwnProperty(property)) {
                request.data.requestObj[property] = data[property];
            }
        }

        cacheKey += JSON.stringify(data);

        request.cacheKey = cacheKey;

        return request;
    },

    validateHydraResult: function(result) {
      if (result.data === undefined ||
          result.data.responses === undefined ||
          result.data.responses[0] === undefined
      ) {
        return 'INVALID_RESPONSE';
      }
  
      if (result.data === undefined ||
          result.data.responses === undefined ||
          result.data.responses[0] === undefined ||
          result.data.responses[0].errorCode !== undefined
      ) {
        return result.data.responses[0].errorCode;
      }
  
      return null;
    },

    setLocale: function(locale) {
      var parts = locale.split('_');
  
       _language = parts[0].substring(0,2).toLowerCase();
       _country = parts[1].substring(0,2).toUpperCase();
    },

    setCountryLanguage: function(country_new, language_new) {
      _country = country_new.substring(0,2).toUpperCase();
      _language = language_new.substring(0,2).toLowerCase();
    },

    setCountry: function(country_new) {
      _country = country_new.substring(0,2).toUpperCase();
    },

    setLanguage: function(language_new) {
      _language = language_new.substring(0,2).toLowerCase();
    },

    getLocale: function() {
      return _language + '_' + _country;
    },

    getCountry: function() {
      return _country;
    },

    getLanguage: function() {
      return _language;
    },

    getDeviceID: function() {
      return device_id;
    }
  };
});
