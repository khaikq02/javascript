//find max

//for .. i

const findMax = (arr) => {
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

const arr = [1, 3, 4, 55, 90, 5];
console.log(findMax(arr));

//forEach

const findMaxForEach = (arr) => {
  let max = arr[0];
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};

console.log(findMaxForEach(arr));

const findMaxByReduce = (arr) => {
  return arr.reduce((max, number) => {
    return number > max ? number : max;
  });
};

console.log(findMaxByReduce(arr));
