require("string-utils-cwm");

var hasProperties = function(value) {
	var vtype = typeof value;
	return value != null && (vtype === "object" || vtype === "function");
};

var isUndefined = function(value) {
	return typeof value === "undefined";
};

// the real helper
module.exports = function(hash, key, default_result) {
  var current = hash;

  var keys = "{0}".format(key).split(".");
  for(var i=0,n=keys.length; i<n; i++) {
    if (hasProperties(current) && keys[i] !== "" && !isUndefined(current[keys[i]])) {
      current = current[keys[i]];
    }
    else {
      current = hash;
      break;
    }
  }
  return current === hash ? default_result : current;
};

