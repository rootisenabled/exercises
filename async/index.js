exports.sequence = sequence;
exports.parallel = parallel;
exports.race = race;

function sequence(funcs) {
  return cb => {
    let data;
    let index = 0;
    next();

    function next() {
      if (index < funcs.length) {
        funcs[index++]((err, res) => {
          data = res;
          next();
        }, data);
      } else {
        cb(null, data);
      }
    }
  };
}

function parallel(funcs) {
  return cb => {
    let data = [];
    let pending = funcs.length;
    funcs.forEach(func => {
      func((err, res) => {
        if (err) {
          cb(err);
        }

        data.push(res);
        pending--;
        if (pending === 0) {
          cb(null, data);
        }
      });
    });
  };
}

function race(funcs) {
  return cb => {
    let data;
    let isOver = false;

    funcs.forEach(func => {
      func((err, res) => {
        if (err) {
          cb(err);
        }
        if (!isOver) {
          isOver = true;
          data = res;
          cb(null, data);
        }
      }, data);
    });
  };
}
