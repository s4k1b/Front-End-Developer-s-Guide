function isEven(value) {
  if(value == 0) return "even";
  else if(value == 1) return "odd";
  else {
    return isEven(value-2);
  }
}

console.log(isEven(75));