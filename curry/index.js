exports.curry = curry;

function curry(func) {
  let arity = func.length;

  return function fn(...originalArgs) {
    
    if (originalArgs.length >= arity) {
      return func(...originalArgs);
    } else {
      return (...lessArgs) => {
        //expects the rest of arguments
        return fn(...[...originalArgs, ...lessArgs]);
      };
    }
  };
}
