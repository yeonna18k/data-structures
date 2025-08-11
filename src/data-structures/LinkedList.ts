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
    return arr.join(" -> ")
  }

  getSize() {
    return this.size;
  }

  prepend(value: T) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  remove(value: T) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current && current.value !== value) {
      previous = current;
      current = current.next!;
    }
    if (current) {
      previous!.next = current.next;
      this.size--;
    }
  }

  getAt(index: number) {
    if (!this.head || index < 0 || index >= this.size) return null;

    let current = this.head;
    let count = 0;

    while (count !== index) {
      current = current.next!;
      count++
    }
    return current.value;
  }

  insertAt(value: T, index: number) {
    if (!this.head || index < 0 || index > this.size) return null;

    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }

    let current = this.head;
    let previous = null;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next!;
      count++
    }
    const node = new Node(value);
    previous!.next = node;
    node.next = current;
    this.size++;
  }
 }
