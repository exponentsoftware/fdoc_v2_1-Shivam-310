function findMissingNumber(nums) {
    const n = nums.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const actualSum = nums.reduce((sum, num) => sum + num, 0); 
    return expectedSum - actualSum; 
  }
  