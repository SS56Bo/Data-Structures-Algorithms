// // in this program if we enter an Input, it will give us the reverse of
// // that input
// example: input: "Ryan Gosling"
//          output: "ginlsoG nayR"

function rev(str) {
  //check the input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid Output!";
  }

  const backwards = [];
  const lengthOfString = str.length - 1;

  for (let i = lengthOfString; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

console.log(rev("Ryan Gosling"));

// we have also written another prgram but we have used a built-in function called
// reverse, let's see how this works

function rev2(str) {
  return str.split("").reverse().join("");
}

console.log(rev2("I Drive"));

// there is also arrow functions which we can employ to do the task in lesser time

const rev3 = (str) => str.split("").reverse().join("");
console.log(rev3("I am Kenough"));

// we can also use the spread operator basically eliminating the need for split

const rev4 = (str) => [...str].reverse().join("");
console.log(rev4("And I'm Enough"));

// console.log(rev4(rev3("Vengeance")));
