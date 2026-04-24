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
        const newNode = new Node(value);

        // If the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the linked list is not empty
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    prepend() { }

    insert() { }

    remove() { }

    print() {
        const arr = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr.join(" -> "), "-> null ");
    }
}


// Append is the process of adding a new node at the end of the linked list.

// Prepend is the process of adding a new node at the beginning of the linked list.

// Insert is the process of adding a new node at a specific position in the linked list.

// Remove is the process of deleting a node from the linked list.