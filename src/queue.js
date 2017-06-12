const Stack = require('./stack');

class Queue{

  constructor(){
    this._stack_L = new Stack();
    this._stack_R = new Stack();
  }

  size(){
    return this._stack_L.size();
  }

  enqueue(el){
    this._stack_L.push(el);
  }

  dequeue(){
    var result;

    //pop all from L and push to R
    while(this._stack_L.size() > 0){
      this._stack_R.push(this._stack_L.pop());
    }
    result = this._stack_R.pop();

    while(this._stack_R.size() > 0){
      this._stack_L.push(this._stack_R.pop());
    }
    return result;
  }
}

module.exports = Queue;