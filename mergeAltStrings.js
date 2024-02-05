function altMerge(str, str2) {
  const mergedArray = [];
  let arr1 = str.split("");
  let arr2 = str2.split("");
  let firstLetter = arr1[0];
  let secondLetter = arr2[0];
  let i = 1;
  let j = 1;
  while (firstLetter || secondLetter) {
    mergedArray.push(firstLetter);
    firstLetter = arr1[i];
    i++;
    mergedArray.push(secondLetter);
    secondLetter = arr2[j];
    j++;
  }

  return mergedArray.join("");
}

console.log(altMerge("Ryan Gosling", "Robert Gillington"));
