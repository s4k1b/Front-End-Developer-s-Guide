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

  static from(ar) {
    let array = [];
    for(let i = 0; i<ar.length; i++) {
      array.push(ar[i]);
    }
    return new Group(array);
  }

}


class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if(this.index == this.group.content.length) return {done: true};
    let value = this.group.content[this.index];
    this.index++;
    return {value, done:false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
