export default class MinHeap<T> {
  private heapContainer: T[];

  constructor() {
    this.heapContainer = [];
  }

  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  private swap(indexOne: number, indexTwo: number) {
    [this.heapContainer[indexOne], this.heapContainer[indexTwo]] = [this.heapContainer[indexTwo], this.heapContainer[indexOne]]
  }

  public insert(value: T) {
    this.heapContainer.push(value);
    let currentIndex = this.heapContainer.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heapContainer[parentIndex] < this.heapContainer[currentIndex]) {
        this.swap(currentIndex, parentIndex)
        currentIndex = parentIndex;
      }
    }
  }
}
