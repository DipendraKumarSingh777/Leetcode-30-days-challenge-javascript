class CustomStack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
        this.incrementArr = new Array(maxSize).fill(0);
    }
    
    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }
    
    pop() {
        if (this.stack.length === 0) {
            return -1;
        }
        const index = this.stack.length - 1;
        const incrementValue = this.incrementArr[index];
        if (index > 0) {
            this.incrementArr[index - 1] += incrementValue;
        }
        this.incrementArr[index] = 0;
        return this.stack.pop() + incrementValue;
    }
    
    increment(k, val) {
        const index = Math.min(k, this.stack.length) - 1;
        if (index >= 0) {
            this.incrementArr[index] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
class CustomStack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
        this.incrementArr = new Array(maxSize).fill(0);
    }
    
    push(x) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(x);
        }
    }
    
    pop() {
        if (this.stack.length === 0) {
            return -1;
        }
        const index = this.stack.length - 1;
        const incrementValue = this.incrementArr[index];
        if (index > 0) {
            this.incrementArr[index - 1] += incrementValue;
        }
        this.incrementArr[index] = 0;
        return this.stack.pop() + incrementValue;
    }
    
    increment(k, val) {
        const index = Math.min(k, this.stack.length) - 1;
        if (index >= 0) {
            this.incrementArr[index] += val;
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
