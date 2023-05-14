function findNthLargest(nums, n) {
    nums.sort((a, b) => b - a); 
    return nums[n - 1];
  }
  
  const arr = [3, 1, 7, 4, 5];
  console.log(findNthLargest(arr, 3));