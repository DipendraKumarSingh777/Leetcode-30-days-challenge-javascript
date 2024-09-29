class Node {
    constructor(key = '', count = 0) {
        this.keys = new Set([key]);
        this.count = count;
        this.prev = null;
        this.next = null;
    }
}

class AllOne {
    constructor() {
        this.head = new Node(); // Dummy head
        this.tail = new Node(); // Dummy tail
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.keyCount = new Map();
        this.countNode = new Map();
    }

    insertNodeAfter(prevNode, newNode) {
        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        prevNode.next.prev = newNode;
        prevNode.next = newNode;
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
    }

    inc(key) {
        if (this.keyCount.has(key)) {
            this.changeKey(key, 1);
        } else {
            this.keyCount.set(key, 1);
            if (this.head.next.count !== 1) {
                this.insertNodeAfter(this.head, new Node(key, 1));
                this.countNode.set(1, this.head.next);
            } else {
                this.head.next.keys.add(key);
            }
        }
    }

    dec(key) {
        if (!this.keyCount.has(key)) return;
        let count = this.keyCount.get(key);
        if (count === 1) {
            this.keyCount.delete(key);
            this.removeKeyFromNode(this.countNode.get(1), key);
        } else {
            this.changeKey(key, -1);
        }
    }

    changeKey(key, offset) {
        let count = this.keyCount.get(key);
        let node = this.countNode.get(count);
        let newCount = count + offset;
        this.keyCount.set(key, newCount);
        let newNode = this.countNode.get(newCount);

        if (!newNode) {
            newNode = new Node(key, newCount);
            this.countNode.set(newCount, newNode);
            this.insertNodeAfter(offset === 1 ? node : node.prev, newNode);
        } else {
            newNode.keys.add(key);
        }

        this.removeKeyFromNode(node, key);
    }

    removeKeyFromNode(node, key) {
        node.keys.delete(key);
        if (node.keys.size === 0) {
            this.removeNode(node);
            this.countNode.delete(node.count);
        }
    }

    getMaxKey() {
        return this.tail.prev === this.head ? '' : [...this.tail.prev.keys][0];
    }

    getMinKey() {
        return this.head.next === this.tail ? '' : [...this.head.next.keys][0];
    }
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
