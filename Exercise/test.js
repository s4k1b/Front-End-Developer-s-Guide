console.log(/cat/.test("concatenate"));
// → true
console.log(/\bcat\b/.test("concatenate"));
// → false
console.log(/\bcat\b/.test("fasdfas co432n cat 432enate fsadf"));
// -> true