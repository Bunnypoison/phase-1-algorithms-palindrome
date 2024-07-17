function isPalindrome(word) {
  const cleanWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanWord === cleanWord.split('').reverse().join('');
}

// Export the isPalindrome function
module.exports = isPalindrome;

// Test the function
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

// Additional test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));

console.log("Expecting: true");
console.log("=>", isPalindrome("a"));

console.log("Expecting: false");
console.log("=>", isPalindrome("ab"));