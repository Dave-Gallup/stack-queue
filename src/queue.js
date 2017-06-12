class Queue{

  constructor(){
    this._storage = [];
  }

  size(){
    return this._storage.length;
  }

  enqueue(el){
    this._storage.push(el);

  }

  dequeue(){
    return this._storage.shift();
  }
}

module.exports = Queue;