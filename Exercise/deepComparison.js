function deepEqual(obj1, obj2) {
  if(obj1 === obj2) return true;

  key1 = Object.keys(obj1);
  key2 = Object.keys(obj2);

  if(key1.length != key2.length) return false;

  for(attribute of key1) {
    if(attribute in obj2) {
      value1 = obj1[attribute];
      value2 = obj2[attribute];

      if(typeof(value1) == typeof(value2)) {
        if(typeof(value1) == 'object') {
          if(!deepEqual(value1, value2))return false;
        }
        else {
          if(value1 != value2) return false;
        }
      }
      else return false;
    }
    else return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 5}));