// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    // convert the numbers to strings
    const num1String = num1.toString();
    const num2String = num2.toString();
  
    // check if the strings have the same length
    if (num1String.length !== num2String.length) {
      return false;
    }
  
    // create an object to store the frequency of each character in num1String
    const num1Frequency = {};
    for (let char of num1String) {
      num1Frequency[char] = (num1Frequency[char] || 0) + 1;
    }
  
    // check the frequency of each character in num2String
    for (let char of num2String) {
      // if the frequency of a character in num2String is not the same as in num1String, return false
      if (num2String.split(char).length - 1 !== num1Frequency[char]) {
        return false;
      }
    }
  
    // if all characters have the same frequency in both strings, return true
    return true;
  }