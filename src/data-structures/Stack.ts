import { Node } from "./LinkedList";

export default class Stack<T> {
  private head: Node<T> | null;
  private size: number

  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(value: T) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  pop(): T | null {
    if (this.isEmpty()) return null;

    const value = this.head!.value
    this.head = this.head!.next
    this.size--;

    return value;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek(): T | null {
    if (this.isEmpty()) return null;

    return this.head!.value;
  }
}
