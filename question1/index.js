// Question1

// You are given an unsorted array of integers. Find the length of the longest sequence of consecutive numbers.Your solution should work in O(n) time complexity.

// Input: [ 5, 9, 10, 39, 25, 11, 6]
// Output: 3
// Explanation: [9, 10, 11] is the longest consecutive sequence in the input array. The output should be 3 as the length of the sequence is 3.

function longestSeq(arr) {
  const numberSet = new Set(arr);
  let longestSeq = 0;

  for (let num of numberSet) {
    if (numberSet.has(num)) {
      let currentNumber = num;
      let currentSum = 1;

      while (numberSet.has(currentNumber + 1)) {
        currentNumber += 1;
        currentSum += 1;
      }

      longestSeq = Math.max(longestSeq, currentSum);
    }
  }

  return longestSeq;
}

const input = [5, 9, 10, 39, 25, 11, 6];
console.log(longestSeq(input)); // 3
