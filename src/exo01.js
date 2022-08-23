// return true if parameter is a primitive, or false otherwise
export function isPrimitive(x) {
  return (
    x === undefined ||
    x === null ||
    (typeof x !== "object" && typeof x !== "function")
  );
}
