// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: O(n) where n is the length of the array passed in as the argument "strings" because each item in the array is visited once
// Space Complexity: O(1) (***Chris, is this right? It takes 2 times the space of 'strings' which reduces to 1. Or is it O(n) because the space taken is is 2 x n where n is the length of the 'strings' array?***)
function grouped_anagrams(strings) {
  let anagrams = {};

  strings.forEach(str => {
    let tempStr = str.split('').sort().join(''); // alphabetize str
    anagrams[tempStr] ? anagrams[tempStr].push(str) : anagrams[tempStr] = [str];
  });

  return Object.values(anagrams);
}

// This method will return the k most common elements
// in the case of a tie it will select the first occuring element.
// Time Complexity: ?
// Space Complexity: ?
function top_k_frequent_elements(list, k) {
  throw new Error("Method hasn't been implemented yet!");
}


// This method will return the true if the table is still
//   a valid sudoku table.
//   Each element can either be a ".", or a digit 1-9
//   The same digit cannot appear twice or more in the same 
//   row, column or 3x3 subgrid
// Time Complexity: ?
// Space Complexity: ?
function valid_sudoku(table) {
  throw new Error("Method hasn't been implemented yet!");
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
