function prepend(num, list) {
  return {value: num, rest: list};
}
function nth(list, ind) {
  if(ind<0 || list == null) return undefined;
  if(ind == 0 ) return list.value;
  return nth(list.rest, ind-1);
}

function arrayToList(numbers) {
  let list = {
    value: numbers[numbers.length-1],
    rest: null
  }
  for(let i=numbers.length-2; i>=0; i--) {
    list = prepend(numbers[i], list);
  }
  return list;
}

function listToArray(list) {
  let numbers = [];

  function buildArray(list) {
    if(list.rest == null){
      numbers.push(list.value);
      return;
    }
    else{
      numbers.push(list.value);
      return buildArray(list.rest);
    }
  }

  buildArray(list);

  return numbers;
}

let lst = arrayToList([1, 2, 3, 2, 1]);
console.log(lst);
console.log(nth(3, lst));
console.log(listToArray(lst));