// return an object with values and keys inverted
// we assume all values to be strings
// { a: "b" } => { b: "a" }

export function invertKeysAndValues(obj) {
  var step;
  let result = {};
  for (step = 0; step < Object.keys(obj).length; step++) {
    result[Object.entries(obj)[step][1]] = Object.entries(obj)[step][0];
  }

  return result;
}
