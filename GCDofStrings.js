function GCDofString(string1, string2) {
  let arrat = [];
  let arr1 = string1.split("");
  let arr2 = string2.split("");
  let firstLetter = arr1[0];
  let secondLetter = arr2[0];
  let i = 1;
  let j = 1;
  while (firstLetter || secondLetter) {
    if (firstLetter === secondLetter) {
      arrat.push(firstLetter);
      firstLetter = arr1[i];
      secondLetter = arr2[j];
      i++;
      j++;
    } else {
      firstLetter = arr1[i];
      secondLetter = arr2[j];
      i++;
      j++;
    }
  }
  let consq = [...new Set(arrat)];
  return consq.join("");
}

console.log(GCDofString("ABABABCAB", "ABABCABA"));
