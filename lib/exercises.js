// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n) where n is the length of the array passed in as the argument "strings" because each item in the array is visited once
// Space Complexity: O(1) (***Chris, is this right? It takes 2 times the space of 'strings' which reduces to 1. Or is it O(n) because the space taken is is 2 x n where n is the length of the 'strings' array?***)
function groupedAnagrams(strings) {
  let anagrams = {};

  strings.forEach(str => {
    let tempStr = str.split('').sort().join(''); // alphabetize str
    anagrams[tempStr] ? anagrams[tempStr].push(str) : anagrams[tempStr] = [str];
  });

  return Object.values(anagrams);
}

// This method will return the k most common elements.
// In the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?

// Clarifying questions:
// 1) What happens if there are < k elements in the list array?
// 2) How big are list and k likely to be? (Optimize for list or for k)?
// 3) Are the elements in list likely to be anything that can't be used as a key? (Will they always be numbers/strings/something that can be coorced into a string? Will they ever be null or undefined?)
function topKFrequentElements(list, k) {
  if (list.length < k){
    return list;
  } // this code might not be necessary once the function is complete

  let elementCounts = {};

  // iterate through each item in list (array)
  // if the item is a key in elementCounts, add 1 to is value
  // if it's not a key already, add it as a key with value 1

// find highest count in arrary
const maxCount = elementCounts.values.max;
let solutions = [];

obj = { name: 'Bobo' }
obj.somethingElse = obj.name
delete obj.name

// OPTION 1
// k.times {  // *** O(k) --> O(1) ?
//  loop through the list array    // *** O(n*k)
//  if the item's matching value === maxCount, add the key to solutions array
// update the maxCount to the next item in the array
// }


// OPTION 2
// const eleCountsInverted = a new object switching keys and values // *** O(n) ?
// now counts are keys, values are the items from the list array
let highestCountsArray = Object.keys(eleCountsInverted); // O(1) ?
// k.times { 
  // loop through highestCountsArray  // *** O(k) --> O(1) ?
  // add the values associated with these keys to the solutions array
// }

  // return an array with the first k keys with highest values in any order
  return solutions;
  
}


// This method will return true if the table is a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function validSudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  groupedAnagrams,
  topKFrequentElements,
  validSudoku
};
