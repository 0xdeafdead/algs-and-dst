// Implement a Priority Queue
// Problem: Implement a priority queue using a min-heap.

// Required Time Complexity: O(logn) for insertion and removal.

namespace Priorioty {
  class MinHeap {
    heap: (number | null)[] = [null];
    constructor() {}

    getParentIndex(index: number) {
      return Math.floor(index / 2);
    }

    getRightChildIndex(index: number) {
      return index * 2 + 1;
    }

    getLeftChildIndex(index: number) {
      return index * 2;
    }

    insert(val: number) {
      this.heap.push(val);
      this.bubbleUp(this.heap.length - 1);
    }

    removeMin(): number {
      this.swap(1, this.heap.length - 1);
      const min = this.heap.pop();
      this.bubbleDown(1);
      return min!;
    }

    bubbleDown(index: number) {
      const leftChild = this.getLeftChildIndex(index);
      const rightChild = this.getRightChildIndex(index);
      if (
        this.heap[index]! > this.heap[leftChild]! ||
        this.heap[index]! > this.heap[rightChild]!
      ) {
        if (this.heap[leftChild]! > this.heap[rightChild]!) {
          this.swap(index, rightChild);
          this.bubbleDown(rightChild);
        } else {
          this.swap(index, leftChild);
          this.bubbleDown(leftChild);
        }
      }
    }

    bubbleUp(index: number) {
      const parent = this.getParentIndex(index);
      if (this.isSwappable(parent, index)) {
        //this.heap[parent]! < this.heap[index]!) {
        console.log("swap");
        this.swap(parent, index);
        this.bubbleUp(parent);
      }
    }

    isSwappable(parentIndex: number, childIndex: number): boolean {
      return (
        this.heap[parentIndex] != null &&
        this.heap[childIndex] != null &&
        this.heap[parentIndex] > this.heap[childIndex]
      );
    }

    swap(parentIndex: number, childIndex: number) {
      [this.heap[parentIndex], this.heap[childIndex]] = [
        this.heap[childIndex],
        this.heap[parentIndex],
      ];
    }
  }

  const queue = new MinHeap();
  queue.insert(10);
  console.log("queue.heap", queue.heap);
  queue.insert(20);
  console.log("queue.heap", queue.heap);
  queue.insert(15);
  console.log("queue.heap", queue.heap);
  queue.insert(8);
  console.log("queue.heap", queue.heap);
  queue.insert(5);
  console.log("queue.heap", queue.heap);
  queue.insert(14);
  console.log("queue.heap", queue.heap);
  console.log(queue.removeMin());
  console.log("queue.heap", queue.heap);
}
