
exports.min = function min(array=0) {
  return array==0 ? 0 : array.sort(compareSort)[0];
}

exports.max = function max(array=0) {
  return array==0 ? 0 : array.sort(compareSort).pop();
}

exports.avg = function avg(array=0) {
  return array==0 ? 0 : array.reduce((a, b) => a + b) / array.length;
}

const compareSort = (a, b) => a - b;
