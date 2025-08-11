import { Node } from "./LinkedList";

export default class Queue<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value: T) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    if (!this.head) this.tail = null;

    return value;
  }

  front() {
    if (!this.head) return null;

    return this.head.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
