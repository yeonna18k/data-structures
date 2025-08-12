export default class MaxHeap<T> {
  private heapContainer: T[];

  constructor() {
    this.heapContainer = [];
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasParent(childIndex: number): boolean {
    return this.getParentIndex(childIndex) >= 0
  }

  private swap(indexOne: number, indexTwo: number) {
    [this.heapContainer[indexOne], this.heapContainer[indexTwo]] = [this.heapContainer[indexTwo], this.heapContainer[indexOne]]
  }

  insert(value: T) {
    this.heapContainer.push(value)

    let currentIndex = this.heapContainer.length - 1;

    while (currentIndex > 0) {
      let parentIndex = this.getParentIndex(currentIndex)

      if (this.heapContainer[currentIndex] > this.heapContainer[parentIndex]) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

}
