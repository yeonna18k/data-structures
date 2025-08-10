class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

export default class LinkedList<T> {
  private head: Node<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value: T) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (true) {
        if (current.next === null) {
          current.next = node;
          break;
        }
        current = current.next;
      }
    }
    this.size++
  }

  toString() {
    let current = this.head;
    let arr = [];
    while (current !== null) {
      arr.push(current.value)
      current = current.next;
    }
    return arr.join(",")
  }

  getSize() {
    return this.size;
  }
 }
