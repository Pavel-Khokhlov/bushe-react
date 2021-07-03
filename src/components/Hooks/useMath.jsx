export function useMath() {
  const runSum = (arr, index) => {
    let sum = 0;
    arr.forEach((item) => sum += item[index]);
    return sum;
  };
  const runMaxValue = (arr, index) => {
    let max = 0;
    arr.forEach((item) => {
        if (max > item[index]) {
          return max;
        } else {
          return (max = item[index]);
        }
    });
    return max;
  }
  const runMiddleValue = (arr, index) => {
    return runSum(arr, index) / arr.length;
  }
  return { runSum, runMaxValue, runMiddleValue };
}
