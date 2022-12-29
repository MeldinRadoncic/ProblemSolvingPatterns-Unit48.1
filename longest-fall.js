// add whatever parameters you deem necessary
function longestFall(arr) {
    // Edge case: if the array is empty, return 0
    if (arr.length === 0) {
      return 0;
    }
  
    // Initialize a variable to keep track of the longest streak
    let longest = 1;
  
    // Initialize a variable to keep track of the current streak
    let current = 1;
  
    // Iterate through the array, starting at the second element
    for (let i = 1; i < arr.length; i++) {
      // If the current element is less than the previous element, increment the current streak
      if (arr[i] < arr[i - 1]) {
        current++;
      }
      // Otherwise, reset the current streak to 1
      else {
        current = 1;
      }
  
      // Update the longest streak if necessary
      longest = Math.max(longest, current);
    }
  
    // Return the longest streak
    return longest;
  }
