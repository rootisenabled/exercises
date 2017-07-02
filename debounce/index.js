const debounce = (fn, delay, immediate) => {
  let timeout;
  return function(...args) {
    let context = this;
    const later = () => {
      timeout = null;
      if (!immediate) {
        fn.apply(context, args);
      }
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
    if (callNow) {
      fn.apply(context, args);
    }
  };
};

exports.debounce = debounce;
