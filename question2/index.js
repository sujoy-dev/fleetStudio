// Question 2

// Write a generator function fibonacciGenerator() that yields an infinite sequence of numbers in the Fibonacci series. The Fibonacci sequence is characterized by the fact that every number is the sum of the two preceding ones, starting from 0 and 1.

// Input:
// Output: const fib = fibonacciGenerator();
// console.log(fib.next().value); // 0
// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 1
// console.log(fib.next().value); // 2
// console.log(fib.next().value); // 3
// console.log(fib.next().value); // 5
// Explanation: The fibonacciGenerator function is a generator (denoted by the function* syntax).
// It yields the next Fibonacci number in the sequence whenever .next() is called.
// The while (true) loop ensures the generator continues indefinitely, yielding Fibonacci numbers as needed.

function* fibonacciGenerator() {
  let x = 0;
  let y = 1;

  while (true) {
    yield x;
    [x, y] = [y, x + y];
  }
}

const fib = fibonacciGenerator();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
