exports.binarySearch = binarySearch;

function binarySearch(arr, elem) {
  let len = arr.length;
  if (!len || elem > len) return -1;

  let min = 0;
  let max = len - 1;
  let middle;
  while (max >= min) {
    middle = Math.floor((max + min) / 2);
    if (arr[middle] === elem) return middle;
    else if (arr[middle] < elem) {
      min = middle + 1;
    } else {
      max = middle - 1;
    }
  }
  return -1;
}
