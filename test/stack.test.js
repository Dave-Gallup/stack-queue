const expect = require('chai').expect;
const Stack = require('../src/Stack');



describe("Stack", function(){

  describe('Stack.size', ()=>{
    it('should have a size operation', function(){
      const stack = new Stack();
      expect(stack.pop).is.a('function');
    });
    it('should return zero when new stack', function(){
      const stack = new Stack();
      expect(stack.size()).to.equal(0);
    });
    it('should return three when three elements pushed', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.size()).to.equal(3);
    });
    it('should return zero when three elements pushed, then three popped', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.size()).to.equal(0);
    });
    it('should return zero when three elements pushed, then four popped', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.size()).to.equal(0);
    });

  });

  describe('Stack.pop', ()=>{
    it('should have a pop operation', function(){
      const stack = new Stack();
      expect(stack.pop).is.a('function');
    });
    it('should pop nothing from an empty stack', function(){
      const stack = new Stack();
      expect(stack.pop()).to.equal(undefined);
    });
    it('should pop the last item (3)', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()).to.equal(3);
    });
    it('should return first element (1) after three pushes, then two pops', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      expect(stack.pop()).to.equal(1);
    });
    it('should return undefined after three pushes, then three pops', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.pop()).to.equal(undefined);
    });
    it('should return undefined after three pushes, then four pops', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.pop()).to.equal(undefined);
    });
  });



  describe('Stack.push', ()=>{
    it('should have a push operation', function(){
      const stack = new Stack();
      expect(stack.push).is.a('function');
    });
    it('should increase size of stack by one for one push', function(){
      const stack = new Stack();
      stack.push(1);
      expect(stack.size()).to.equal(1);
    });
    it('should increase size of stack by three for three pushes', function(){
      const stack = new Stack();
      stack.push(1);
      stack.push(1);
      stack.push(1);
      expect(stack.size()).to.equal(3);
    });
  });



});