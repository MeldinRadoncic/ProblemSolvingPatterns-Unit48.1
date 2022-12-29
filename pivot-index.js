// add whatever parameters you deem necessary
function pivotIndex(arr) {
    // Edge case: if the array is empty or has only one element, return -1
    if (arr.length <= 1) {
      return -1;
    }
  
    // Initialize variables to keep track of the left and right sums
    let leftSum = 0;
    let rightSum = 0;
  
    // Iterate through the array, starting at the second element
    for (let i = 1; i < arr.length; i++) {
      // Add the current element to the right sum
      rightSum += arr[i];
    }
  
    // Iterate through the array, starting at the first element
    for (let i = 0; i < arr.length; i++) {
      // If the left sum is equal to the right sum, return the current index
      if (leftSum === rightSum) {
        return i;
      }
      // Otherwise, update the left and right sums
      leftSum += arr[i];
      rightSum -= arr[i + 1];
    }
  
    // If the loop completes, return -1
    return -1;
  }
