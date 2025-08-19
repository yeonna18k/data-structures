import MinHeap from "./MinHeap";

export default class PriorityQueue<T> {
  private minHeap: MinHeap<T>;

  constructor() {
    this.minHeap = new MinHeap<T>();
  }

  public insert(value: T): void {
    this.minHeap.insert(value)
  }

  public poll(): T | null {
    return this.minHeap.extractMin()
  }
}
