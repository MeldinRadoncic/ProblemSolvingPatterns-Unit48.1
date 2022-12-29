// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      // If the left element is positive, move to the next element
      if (arr[left] > 0) {
        left++;
        continue;
      }
  
      // If the right element is negative, move to the previous element
      if (arr[right] < 0) {
        right--;
        continue;
      }
  
      // Swap the elements and move to the next pair
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  
    return arr;
  }
