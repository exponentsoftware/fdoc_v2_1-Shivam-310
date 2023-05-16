function findMissingNumber(nums) {
    const n = nums.length + 1; // Add 1 to account for the missing number
    const expectedSum = (n * (n + 1)) / 2; // Sum of integers from 1 to n
    const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of elements in input array
    return expectedSum - actualSum; // Difference is the missing number
  }
  