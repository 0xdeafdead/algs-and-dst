// Reverse a Linked List
// Problem: Given a singly linked list, reverse it in-place.
// Required Time Complexity: 𝑂(𝑛)

class Item {
    value: number;
    prev: Item | undefined
    next: Item | undefined
    constructor(value: number, prev?: Item, next?: Item,) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

const randNumb = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);

class LinkedList {
    start: Item;
    lastItem: Item;
    constructor(val: number) {
        console.log('val', val)
        this.start = new Item(val);
        this.lastItem = this.start;
    }

    addItem(val: number) {
        console.log('val', val)
        const newLast = new Item(val, this.lastItem)
        this.lastItem.next = newLast;
        this.lastItem = newLast;
    }

    reverseList() {
        let currentItem: Item | undefined = this.lastItem;
        while (currentItem != undefined) {
            [currentItem.prev, currentItem.next] = [currentItem.next, currentItem.prev];
            currentItem = currentItem.next
        }
        [this.lastItem, this.start] = [this.start, this.lastItem];
    }

    printList(item?: Item) {
        if (item) {
            console.log('item.prev', item.prev?.value)
            console.log('item.value', item.value)
            console.log('item.next', item.next?.value)
            this.printList(item.next);
        }
    }
}


const ll = new LinkedList(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
ll.addItem(randNumb(0, 100));
// ll.printList(ll.start);
ll.reverseList();
ll.printList(ll.start);