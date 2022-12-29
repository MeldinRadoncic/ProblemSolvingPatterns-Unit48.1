// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    // Edge case: if the first string is empty, return true
    if (str1.length === 0) {
      return true;
    }
  
    // Initialize variables to keep track of the current index in the two strings
    let str1Index = 0;
    let str2Index = 0;
  
    // Iterate through the characters in the second string
    while (str2Index < str2.length) {
      // If the current character in the second string matches the current character in the first string, increment the index in the first string
      if (str1[str1Index] === str2[str2Index]) {
        str1Index++;
      }
      // If the index in the first string has reached the end, return true
      if (str1Index === str1.length) {
        return true;
      }
      // Increment the index in the second string
      str2Index++;
    }
  
    // If the loop completes, return false
    return false;
  }
