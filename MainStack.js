var MinStack = function() {
    this.elements = [];
  };
  
 
  MinStack.prototype.push = function(x) {
    this.elements.push({
      value: x,
      min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
    });
  };
  /**
  
   @return {void}
   */
  MinStack.prototype.pop = function() {
    this.elements.pop();
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.top = function() {
    return this.elements[this.elements.length - 1].value;
  };
  /**
  
   @return {number}
   */
  MinStack.prototype.getMin = function() {
    return this.elements[this.elements.length - 1].min;
  };

  minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);