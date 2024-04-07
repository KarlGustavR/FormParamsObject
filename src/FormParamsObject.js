function FormParamsObject(objectParams) {
  this.objectParams = objectParams || {};

  this.getFullObject = function() {
    return this.objectParams;
  };

  this.convertObjectToArray = function(propPath) {
    let props = propPath.split('.');
    let obj = this.objectParams;
    for (const element of props) {
      if (obj && obj.hasOwnProperty(element)) {
        obj = obj[element];
      } else {
        return [];
      }
    }
    return Object.keys(obj).map(function(key) {
      return { key: key, value: obj[key] };
    });
  };

  this.getObjectProperty = function(propPath) {
    let props = propPath.split('.');
    let obj = this.objectParams;
    for (const element of props) {
      if (obj && obj.hasOwnProperty(element)) {
        obj = obj[element];
      } else {
        return null;
      }
    }
    return obj;
  };

  this.setObjectProperty = function(propPath, value) {
    let props = propPath.split('.');
    let obj = this.objectParams;
    for (let i = 0; i < props.length - 1; i++) {
      if (!obj[props[i]] || typeof obj[props[i]] !== 'object') obj[props[i]] = {};
      obj = obj[props[i]];
    }
    obj[props[props.length - 1]] = value;
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = FormParamsObject;
}
