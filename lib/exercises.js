// This method will return an array of arrays.
// Each subarray will have strings which are anagrams of each other
// Time Complexity: ?
// Space Complexity: ?
function grouped_anagrams(strings) {
  const indexHash = {};
  strings.forEach ((string) => {
    const tempString = string.split('').sort().join('');
    if (!indexHash[tempString]) {
      indexHash[tempString] = [string];
    } else {
      indexHash[tempString].push(string);
    }
  }) 

  const returnArray = []

  for (let key in indexHash) {
    returnArray.push(indexHash[key])
  }
return returnArray;
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
  // check rows

  for (let row = 0; row < table.length; row++) {
    const rowHash = {};
    for (let i = 0; i < table[row].length; i++) {
      let char = table[row][i]
      if (char !== ".") {
        if (rowHash[char]) {
          return false;
        } 
        rowHash[char] = 1;
      }
    }
  }

  for (let i = 0; i < table[0].length; i++) {
    const colHash = {};
    for (let col = 0; col < table.length; col++) {
      let char = table[col][i];
      if (char !== '.') {
        if (colHash[char]) {
          return false;
        }
        colHash[char] = 1;
      }
    }
  }

  const subboxes = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

  for (let counter1 = 0; counter1 < 3; counter1++) {
    for (let counter2 = 0; counter2 < 3; counter2++) {
      const subboxHash = {};
      for (let counter3 = 0; counter3 < 3; counter3++) {
        for (let counter4 = 0; counter4 < 3; counter4++) {
          let char = table[subboxes[counter1][counter3]][subboxes[counter2][counter4]];
          if (char !== '.') {
            if (subboxHash[char]) {
              return false;
            }
            subboxHash[char] = 1;
          }
        }
      }
    }
  }
  return true;
}

module.exports = {
  grouped_anagrams,
  top_k_frequent_elements,
  valid_sudoku
};
