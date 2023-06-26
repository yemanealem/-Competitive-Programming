var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    let res = this.stack2.pop();
    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return res;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
    }
    let res = this.stack2.pop();
     this.stack1.push(res);
    while (this.stack2.length !== 0) {
        this.stack1.push(this.stack2.pop());
    }
    return res;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stack1.length;
};
var obj = new MyQueue()
 obj.push(4)
//  var param_2 = obj.pop()
//  var param_3 = obj.peek()
//  var param_4 = obj.empty()

 console.log(obj)