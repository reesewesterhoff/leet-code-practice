function divideArray(nums: number[]): boolean {
  const sortedNums = nums.sort((a: number, b: number) => a - b);

  for (let i = 0; i < sortedNums.length; i += 2) {
    if (sortedNums[i] !== sortedNums[i + 1]) return false;
  }

  return true;
}
