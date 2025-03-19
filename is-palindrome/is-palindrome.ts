function isPalindrome(s: string): boolean {
  const onlyAlphaNumericLowercase = s.replace(/\W/g, "").toLowerCase();
  if (
    onlyAlphaNumericLowercase ===
    onlyAlphaNumericLowercase.split("").reverse().join("")
  ) {
    return true;
  }

  return false;
}
