function findFor(value) {
  function find(current, history) {
    if(current == value) return history;
    else if(current > value) return null;
    else {
      return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
    }
  }

  return find(1, "1");
}

console.log(findFor(24));