var rotate = function (nums, k) {
  for (i = k; i > 0; i--) {
    y = nums.pop();
    nums.unshift(y);
  }
  return nums;
};

console.log(rotate([1, 2, 3], 1));

// p = [1, 2, "l", 9];
// console.log(p);
// y = p.pop();
// console.log(p);
// p.unshift(y);
// console.log(p);
