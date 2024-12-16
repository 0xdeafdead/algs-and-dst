// const numbers = [1, 4, 2, 5, 8, 7, 9, 0, 3, 6, 9];
// const k = 2;

// function findKthLargest(numbers: number[], k: number): number {
//     return numbers.sort((a, b) => b - a)[k - 1];
// }
// function largest(numbers: number[]): number {
//     let largest = 0;
//     numbers.forEach((number) => {
//         if (number > largest) {
//             largest = number
//         }
//     })
//     return largest
// }

// console.log(largest(numbers));
// console.log(findKthLargest(numbers, k))

interface IEvent {
    name: string;
    participants: number
}

class MaxHeap {
    heap: (IEvent | null)[] = [null];
    size: number = 0;

    getRightChild(currentIndex: number): number {
        return currentIndex * 2 + 1
    }
    getLeftChild(currentIndex: number): number {
        return currentIndex * 2
    }
    getParent(currentIndex: number): number {
        return Math.floor(currentIndex / 2)
    }

    add(newEvent: IEvent) {
        this.heap.push(newEvent);
        this.size++;
        this.bubbleUp();
    }

    getMax(): IEvent | null {
        if (this.heap.length <= 1) return null;
        const max: IEvent = this.heap[1]!;
        console.log('max', max)
        this.swap(1, this.size);
        this.heap.pop();
        this.size--;
        this.bubbleDown();
        return max;
    }

    bubbleUp() {
        let currentIndex = this.size;
        let parentIndex = this.getParent(currentIndex);
        while (currentIndex > 1 && this.heap[currentIndex]!.participants > this.heap[parentIndex]!.participants) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.getParent(currentIndex)
        }
    }
    bubbleDown() {
        let currentIndex = 1;
        let leftChildIndex = this.getLeftChild(currentIndex);
        let rightChildIndex = this.getRightChild(currentIndex);
        while (this.isSwapable(currentIndex, leftChildIndex, rightChildIndex)) {
            if (this.heap[rightChildIndex]!.participants > this.heap[leftChildIndex]!.participants) {
                this.swap(currentIndex, rightChildIndex)
                currentIndex = rightChildIndex;
            } else {
                this.swap(currentIndex, leftChildIndex)
                currentIndex = leftChildIndex
            }
            leftChildIndex = this.getLeftChild(currentIndex);
            rightChildIndex = this.getRightChild(currentIndex);
        }

    }
    isNotNull(index: number): boolean {
        return index < this.size
    }
    isSwapable(currentIndex: number, leftChildIndex: number, rightChildIndex: number): boolean {
        return (this.isNotNull(leftChildIndex) && this.heap[leftChildIndex]!.participants > this.heap[currentIndex]!.participants) || (this.isNotNull(rightChildIndex) && this.heap[rightChildIndex]!.participants > this.heap[currentIndex]!.participants)
    }
    swap(currentIndex: number, parentIndex: number) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]]
    }
}

const heap1 = new MaxHeap();
const e = heap1.getMax();
console.log('e', e)

const heap2 = new MaxHeap();
heap2.add({ participants: 5, name: 'test1' });
console.log('heap2.heap', heap2.heap)
heap2.add({ participants: 3, name: 'test2' });
console.log('heap2.heap', heap2.heap)
heap2.add({ participants: 10, name: 'test4' });
console.log('heap2.heap', heap2.heap)
heap2.add({ participants: 20, name: 'test3' });
heap2.add({ participants: 13, name: 'test3' });
heap2.add({ participants: 15, name: 'test3' });
console.log('heap2.heap', heap2.heap)
const e2 = heap2.getMax();
console.log('e2', e2)
console.log('heap2.heap', heap2.heap)
