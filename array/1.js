// Array exercises
// 1. Print numbers: 1 -> 10
// 2. Print even numbers [2, 4, 6, 8, 10]
// 3. Print even numbers but less than n

const printNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};

const printEvenNumbers = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
};
console.log(printEvenNumbers(10));
