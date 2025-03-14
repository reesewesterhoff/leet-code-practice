function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0) {
      const sum = nums[i] + nums[i - 1];
      if (sum === target) return [i - 1, i];
    }
  }

  return [];
}
