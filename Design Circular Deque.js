class MyCircularDeque {
    constructor(k) {
        this.k = k;
        this.queue = [];
    }

    insertFront(value) {
        if (this.isFull()) return false;
        this.queue.unshift(value);
        return true;
    }

    insertLast(value) {
        if (this.isFull()) return false;
        this.queue.push(value);
        return true;
    }

    deleteFront() {
        if (this.isEmpty()) return false;
        this.queue.shift();
        return true;
    }

    deleteLast() {
        if (this.isEmpty()) return false;
        this.queue.pop();
        return true;
    }

    getFront() {
        return this.isEmpty() ? -1 : this.queue[0];
    }

    getRear() {
        return this.isEmpty() ? -1 : this.queue[this.queue.length - 1];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    isFull() {
        return this.queue.length === this.k;
    }
}
