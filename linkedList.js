#!/usr/bin/env node

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    pop() {
        if (this.head === null) {
            return;
        } else {
            const prevNode = this.at(this.length - 2);
            this.tail = prevNode;
            prevNode.next = null;
            this.length--;
        }
    }

    size() {
        return this.length;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        if (index <= 0 || index >= this.length) {
            return null;
        }
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    find(value) {
        let currentNode = this.head;
        let currentIndex = 0;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return null;
    }

    toString() {
        if (this.head === null) {
            return null;
        }
        let currentNode = this.head;
        let output = "";
        for (let index = 0; index < this.length; index++) {
            output = output.concat(`(${currentNode.value}) -> `);
            currentNode = currentNode.next;
        }
        output = output.concat("null");
        return output;
    }

    insertAt(value, index) {
        if (index >= this.length) {
            this.append(value);
        } else if (index <= 0) {
            this.prepend(value);
        } else {
            const prevNode = this.at(index - 1);
            const currentIndexNode = prevNode.next;
            const insertNode = new Node(value);
            prevNode.next = insertNode;
            insertNode.next = currentIndexNode;
        }
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            return;
        }
        if (index === 0) {
            this.head = this.head.next;
        } else {
            const prevNode = this.at(index - 1);
            const nextNode = prevNode.next.next;
            prevNode.next = nextNode;
            if (nextNode === null) {
                this.tail = prevNode;
            }
        }
        this.length--;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.pop();
list.insertAt("bagel", 2);
list.removeAt(4);
list.prepend("elephant");

console.log(list.toString());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.size());
console.log(list.find("bagel"));
console.log(list.contains("bagel"));
