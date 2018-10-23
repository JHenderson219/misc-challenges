/*
 * Given a 2-Dimensional terrain model aproximated as an array of heights,
 * calculate how much water the terrain can hold.
 * 
 * Example: [1,0,1] could hold a water volume of 1.
 * (See whiteboard for more examples)
 * 
 */

// function waterVolumeFor(terrain) {
// 	// if we lose height and then gain height up to at least the original height, there's water
//   let regions = [];
//   let possibleStartIndex; //ie local max
//   let endWaterLine;
//   let nextHeighest;

//   let lastHeight = 0;
//   let lastIndex = 0;
//   let localMax = 0;
//   let localMin = 0;
//   terrain.forEach((currentHeight, index, arr) => {
//     if (lastHeight && lastHeight > currentHeight) {
//       // location < lastElement  - check undefined
//       possibleStartIndex = lastIndex;
//     }
//     if (currentHeight >= arr[possibleStartIndex] && currentHeight <= arr[possibleStartIndex]) {
//       // we've found a water-containing region
//       regions.push([possibleStartIndex, index]);
//     }
// 		if (index === arr.length-1 && regions[regions.length-1][1] !== possibleStartIndex) {
//       // we've hit the end
//       // regio
//     }
//   	// possible water - if we find another location that's equal or greater, water is contained between those locations -> possibleStartIndex = lastElement
//   	// 
//   });
//   // [[0,2], [2,6]]
//   // if we reach the end without finding an equal or greater height
//   	// we need to go back through and find regions again

//   // Highest thing since last highest thing

//   // once we have regions, we need to find how much water they have
//   // With the water line (smallest maximum height)
//   // compare against the terrain height -> waterline - terrain height = water volume

//   // add up values of each region to get total water volume of zone
// }
class Region {
  constructor() {
    this.max = {
      value: null,
      location: null,
    };
    this.min = {
      value: null,
      location: null,
    }
  }

}
function waterVolumeFor(terrain) {
  let waterCount = 0;

  let lastIndex = 0;
  let lastElement = 0;
  let maxHeight = 0;
  let secondMax = 0;
  let localMin;
  let regions = [];
  terrain.forEach((element, index) => {
    if (element > maxHeight) {
      maxHeight = element;
    }
    if (element < lastElement) {
      // we are descending
    }

    // we know we have ended a region when we experience a descent of some amount, and then rise at least one over that bottom point
    // the water containing area is from the lowest ma

  });

  return waterCount;
}

let arr1 = [3, 2, 2, 3, 4, 5, 6, 5, 3, 2, 1];
let arr2 = [5, 3, 2, 2, 4, 5, 7, 4, 5]
console.log(waterVolumeFor(arr1));
console.log(waterVolumeFor(arr2));