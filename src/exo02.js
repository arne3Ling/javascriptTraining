// return true if object `obj` has a property `key`
export function hasProperty(obj, key) {
  return key in obj;
}

// return true if object has some property with value `value`
export function hasPropertyValue(obj, value) {
  if (obj === undefined || value === undefined) {
    return false;
  }

  return Object.values(obj).includes(value);
}

// return the number of properties of the object (without delegated properties)
export function getNumberOfProperties(obj) {
  return Object.values(obj).length;
}
