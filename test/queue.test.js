const expect = require('chai').expect;
const Queue = require('../src/Queue');


describe("Queue", function(){

  describe('Queue.size', ()=>{
    it('should have an size operation', function(){
      var queue = new Queue();
      expect(queue.size).is.a('function');
    });
    it('should have size of new Queue be zero', function(){
      var queue = new Queue();
      expect(queue.size()).to.equal(0);
    });
    it('should have size be one after enqueue', function(){
      var queue = new Queue();
      queue.enqueue(1);
      expect(queue.size()).to.equal(1);
    });
    it('should have size of 3 after three enqueues', function(){
      var queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size()).to.equal(3);
    });
    it('should have size of zero after three enqueues and four dequeues', function(){
      var queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.size()).to.equal(0);
    });

  });

  describe('Queue.enqueue', ()=>{
    it('should have an enqueue operation', function(){
      var queue = new Queue();
      expect(queue.enqueue).is.a('function');
    });
    it('should not return anything on enqueue', ()=>{
      var queue = new Queue();
      expect(queue.enqueue(1)).to.equal(undefined);
    });
  });

  describe('Queue.dequeue', ()=>{
    it('should have an dequeue operation', function(){
      var queue = new Queue();
      expect(queue.dequeue).is.a('function');
    });
    it('should return undefined when dequeuing empty Queue', ()=>{
      var queue = new Queue();
      expect(queue.dequeue()).to.equal(undefined);
    });
    it('should return only item when dequeuing after one enqueue', ()=>{
      var queue = new Queue();
      queue.enqueue(4);
      expect(queue.dequeue()).to.equal(4);
    });
    it('should return first item when dequeuing after three enqueues', ()=>{
      var queue = new Queue();
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      expect(queue.dequeue()).to.equal(4);
    });
    it('should return last item when enqueuing three and dequeuing three', ()=>{
      var queue = new Queue();
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      queue.dequeue();
      queue.dequeue();
      expect(queue.dequeue()).to.equal(6);
    });
    it('should return undefined when enqueuing three and dequeuing four', ()=>{
      var queue = new Queue();
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.dequeue()).to.equal(undefined);
    });
  });


})