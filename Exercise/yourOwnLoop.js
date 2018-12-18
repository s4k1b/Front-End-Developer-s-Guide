function loop(n, test, update, body) {
  for(let i=n; test(i) ; i=update(i)) {
    body(i);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);