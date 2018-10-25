/*
 * Given a 2-Dimensional terrain model aproximated as an array of heights,
 * calculate how much water the terrain can hold.
 * 
 * Example: [1,0,1] could hold a water volume of 1.
 * (See whiteboard for more examples)
 * https://codeshare.io/2K7e6K
 */


function waterVolumeFor(terrain) {
  let water = 0;
  let start = terrain[0];
  let left = [start];
  for (let i = 1; i < terrain.length; i++) {
    left[i] = Math.max(left[i-1], terrain[i]);
  }
  let endIndex = terrain.length - 1;
  let end = terrain[endIndex];
  let right = new Array(terrain.length);
  right[endIndex] = end;
  for (let i = terrain.length-2; i >= 0; i--) {
    right[i] = Math.max(right[i+1], terrain[i]);
  }
  for (let i = 0; i < terrain.length; i++) {
    water += Math.min(left[i], right[i]) - terrain[i];
  }
  console.log('L', left);
  console.log('R', right);
  console.log('T', terrain);
  return water;
}

let testArrs = [
  [3, 2, 2, 3, 4, 5, 6, 5, 3, 2, 1], // 2
  [5, 3, 2, 2, 4, 5, 7, 4, 5], // 10
  [3, 4, 2, 3], // 1
  [3, 2, 1, 2], // 1
];
let arr0 = [3, 2, 2, 3, 4, 5, 6, 5, 3, 2, 1]; // 2
let arr1 = [5, 3, 2, 2, 4, 5, 7, 4, 5]; // 9
let arr2 = [3, 4, 2, 3]; // 1
let arr3 = [3, 2, 1, 2]; // 1
testArrs.forEach( (arr, index) => {
  console.log(
    waterVolumeFor(arr)
  );
});