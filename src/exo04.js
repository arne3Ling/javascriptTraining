export function spyOnProperty(obj, prop, onRead, onWrite) {
  // change the descriptor of property `prop` of `obj`:
  // - call onRead() when property is accessed
  // - call onWrite(newValue) when property is reassigned
  // these functions are just observers, they do not return anything
  // however it should still be possible to read and write a value for property `prop`
  var initialValue = obj[prop];
  Object.defineProperties(obj, {
    [prop]: {
      get: function () {
        onRead();
        return initialValue;
      },
      set: function (newValue) {
        onWrite(newValue);
        initialValue = newValue;
      },
      enumerable: true
    }
  });
}

export function setPrivatesAndConstants(obj) {
  // change the descriptor of every property of the object:
  // properties with names starting with an underscore _ must be non enumerable
  // properties with names starting with an uppercase letter (A-Z) must be non writable and non configurable
  for (let key in obj) {
    Object.defineProperty(obj, key, {
      enumerable: !key.startsWith("_"),
      writable: key.charAt(0) !== key.charAt(0).toUpperCase(),
      configurable: key.charAt(0) !== key.charAt(0).toUpperCase()
    });
  }
}
