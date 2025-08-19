import MinHeap from "./MinHeap";

/**
 * 우선순위 큐
 */
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

  public peek(): T | null {
    return this.minHeap.peek();
  }

  public isEmpty(): boolean {
    return this.minHeap.isEmpty();
  }

  public size(): number {
    return this.minHeap.size();
  }

  public clear(): void {
    this.minHeap.clear();
  }
}
