function mergeSort(arr) {
  // Implement merge sort!
  // split array into array of arrays, all of length 1
  // combine each element with it's neighbor by comparing them - smaller values to the left, larger to the right
  // combine these sub arrays with each other
  arr = splitArray(arr);
  arr = merge(arr);
  return arr;
}
function merge(arr) {
  let iterator = 1;
  while (iterator < arr.length) {
    let ordered = combineArrs(arr[iterator-1], arr[iterator]);
    arr.splice(iterator-1, 2, ordered);
    iterator++;
  }
  if (arr.length > 1) {
    merge(arr);
  }
  return arr[0];
}
function splitArray(arr) {
  let out = [];
  // splits an array into an a 2d array of arrays, all length of 1
  for(let i = 0; i < arr.length; i++) {
    out.push([arr[i]]);
  }
  return out;
}
function combineArrs(arr1, arr2) {
  let out = [];
  // two lists in a sequence
  // queueing and dequeing
  // compare first of 1st to first of 2nd
  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0 || !arr1[0]) {
      out = out.concat(arr2);
      arr2.splice(0, arr2.length);
    }
    if (arr2.length === 0 || !arr2[0]) {
      out = out.concat(arr1);
      arr1.splice(0, arr1.length);
    }
    if (arr1[0] <= arr2[0]) {
      out.push(arr1[0]);
      arr1.splice(0, 1);
    } else if (arr1[0] > arr2[0]) {
      out.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }
  return out;
}

let testArray = [6,5,3,1,8,7,2,4];

console.warn(mergeSort(testArray));