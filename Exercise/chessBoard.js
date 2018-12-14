let s = "";
for(let i=1; i<=8; i++) {
  for(let j=1; j<=8; j++) {
    if((i+j)%2 == 1) {
      s+="#";
    }
    else s+=" ";
  }

  if(i<8)s+="\n";
}

console.log(s);