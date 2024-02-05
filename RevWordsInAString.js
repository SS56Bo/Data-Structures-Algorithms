function revWords(word1) {
  let art3 = word1.split(" ");
  console.log(art3);
  let art = [];
  for (let i = art3.length - 1; i >= 0; i--) {
    art.push(art3[i]);
  }
  console.log(art);
  return art.join(" ").trim().replace(/\s+/g, " ");
}

// console.log(revWords("  hello world  "));
console.log(revWords("a good   example"));
