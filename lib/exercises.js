// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n) where n is the length of the input array
// Space Complexity: O(nm) where n is the length of the input array and m is the average length of the values in the array
function groupedAnagrams(strings) {
  const hashTable = {};

  if (strings == false) {
    return [];
  }

  strings.forEach(function(string) {
    const arrayString = string.split('');
    const sorted = arrayString.sort();
    const sortedString = sorted.join();

    if (hashTable[sortedString] == undefined) {
      hashTable[sortedString] = [string]
    } else {
      hashTable[sortedString].push(string)
    }
  });

  const output = Object.values(hashTable)
  return output
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function topKFrequentElements(list, k) {
  throw new Error("Method hasn't been implemented yet!");
}


// This method will return the true if the table is still
//   a valid sudoku table.
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
