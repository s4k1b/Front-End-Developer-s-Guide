class Group {
  constructor(content) {
    this.content = content;
  }

  has(value) {
    return (value in this.content);
  }
  add(value) {
    if(!this.has(value)){
      this.content.push(value);
    }
  }
  delete(value) {
    if(this.has(value)) {
      this.content.splice(this.content.indexOf(value), 1);
    }
  }

  static from([start, end]) {
    let array = [];
    for(let i = start; i<=end; i++) {
      array.push(i);
    }
    return new Group(array);
  }
}


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false