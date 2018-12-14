let x = 10;
var z = 200;
if (true) {
  let y = 20;
  var z = 30;

  console.log(x+y+z);
}

if(true) {
  var z = 100;
  console.log(z);
}


console.log(x+z);