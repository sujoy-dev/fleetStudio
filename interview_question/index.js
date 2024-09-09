// Input = [[1,2,3],[2,3,4],[3,4,5]];
// Output = [[6],[9],[12]];

function getHighest(arrs) {
  return arrs.map((arr) => {
    const sum = arr.reduce((acc, current) => acc + current, 0);
    return [sum];
  });
}

const input = [
  [1, 2, 3],
  [2, 3, 4],
  [3, 4, 5],
];
console.log(getHighest(input));
