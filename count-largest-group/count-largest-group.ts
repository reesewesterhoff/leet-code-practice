function countLargestGroup(n: number): number {
  const digitSums = {
    "": 0,
  };

  for (let i = 0; i < n; i++) {
    const digits = (i + 1).toString().split("");
    let digitSum = 0;
    digits.forEach((digit) => {
      digitSum += Number(digit);
    });

    if (!digitSums[digitSum]) digitSums[digitSum] = 1;
    else digitSums[digitSum] += 1;
  }

  const digitSumVals = Object.values(digitSums);
  const filteredDigitSumVals = digitSumVals.filter(
    (val) => val === digitSumVals[0]
  );

  return filteredDigitSumVals.length;
}
