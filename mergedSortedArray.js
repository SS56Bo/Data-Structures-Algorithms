const mergeArray = (arrayOne, arrayTwo) => {
  const mrgdArray = [];
  let array1Item = arrayOne[0];
  let array2Item = arrayTwo[0];
  let i = 1;
  let j = 1;
  //check empty
  if (arrayOne.length === 0) {
    return arrayTwo;
  }
  if (arrayTwo.length === 0) {
    return arrayOne;
  }
  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mrgdArray.push(array1Item);
      array1Item = arrayOne[i];
      i++;
    } else {
      mrgdArray.push(array2Item);
      array2Item = arrayTwo[j];
      j++;
    }
  }

  return mrgdArray;
};
let arrOne = [1, 2, 4, 6];
let arrTwo = [0, 3, 7, 8, 10];
console.log(mergeArray(arrOne, arrTwo));
