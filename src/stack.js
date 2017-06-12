class Stack {

  constructor(){
    this._storage = [];
  }

  size(){
    return this._storage.length;
  }

  push(el) {
    this._storage.push(el);
  }

  pop(){
    return this._storage.pop();
  }

}

module.exports = Stack;