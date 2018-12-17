function range(start, end, step= start<end?1:-1) {
  if(step == -1) {
    step = -step;
    let tmp = start;
    start = end;
    end = tmp;
  }

  let ans = [];
  for(let i=start; i<=end; i+=step) {
    ans.push(i);
  }

  return ans;
}

function sum(numbers) {
  let sum = 0;
  for(number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sum(range(5, 2)));