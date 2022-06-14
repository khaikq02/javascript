//find longest word

const arr = ['kieu', 'quang', 'khai'];

const findLongestWord = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;

  const newArr = arr.map((e) => e.length);
  const indexOfValue = newArr.indexOf(findMax(newArr));
  return arr[indexOfValue];
};

const findMax = (arr) => {
  return arr.reduce((max, number) => {
    return number > max ? number : max;
  });
};

const result = findLongestWord(arr);
console.log(result);
