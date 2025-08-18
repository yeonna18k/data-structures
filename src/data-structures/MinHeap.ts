export default class MinHeap<T> {
  private heapContainer: T[];

  constructor() {
    this.heapContainer = [];
  }

  // --- 보조 메서드 ---

  /**
   * 주어진 자식 노드의 부모 인덱스를 반환합니다.
   * @param childIndex - 자식 노드의 인덱스
   * @returns 부모 노드의 인덱스
   */
  private getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  /**
   * 두 인덱스의 값을 서로 교환합니다
   * @param indexOne
   * @param indexTwo
   */
  private swap(indexOne: number, indexTwo: number) {
    [this.heapContainer[indexOne], this.heapContainer[indexTwo]] = [this.heapContainer[indexTwo], this.heapContainer[indexOne]]
  }

  // --- 공개 메서드 ---

  /**
   * 힙에 새로운 값을 삽입하고, 힙의 규칙을 유지하기 위해 재구성합니다.
   * @param value - 삽입할 값
   */
  public insert(value: T) {
    this.heapContainer.push(value);
    let currentIndex = this.heapContainer.length - 1;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heapContainer[parentIndex] > this.heapContainer[currentIndex]) {
        this.swap(currentIndex, parentIndex)
        currentIndex = parentIndex;
      }
    }
  }

  // --- 보조 메서드 ---
  /**
   * 주어진 부모 노드의 왼쪽(오른쪽) 자식 인덱스를 반환합니다
   * @param parentIndex
   * @returns 왼쪽(오른쪽) 자식 노드의 인덱스
   */

  private getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }

  private getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }
  /**
   * 주어진 부모 노드의 왼쪽(오른쪽) 자식이 있는지 확인합니다.
   * @param parentIndex
   * @returns 왼쪽(오른쪽) 자식이 있으면 true, 없으면 false
   */
  private hasLeftChild(parentIndex: number) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
  }

  private hasRightChild(parentIndex: number) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
  }

  /**
   * 힙의 규칙이 깨졌을 때, 새로운 루트 노드를 아래로 내려보내며 재구성합니다.
   * @param parentIndex - 힙 다운을 시작할 모두 노드의 인덱스(기본값은 0)
   */
  private heapifyDown(parentIndex = 0) {
    let currentIndex = parentIndex;

    while(this.hasLeftChild(parentIndex)) {
      let smallestChildIndex = this.getLeftChildIndex(currentIndex)

      if (this.hasRightChild(currentIndex) && this.heapContainer[this.getRightChildIndex(currentIndex)] < this.heapContainer[smallestChildIndex]) {
        smallestChildIndex = this.getRightChildIndex(currentIndex)
      }
      if (this.heapContainer[currentIndex] <= this.heapContainer[smallestChildIndex]) break;

      this.swap(currentIndex, smallestChildIndex);

      currentIndex = smallestChildIndex;
    }
  }

  // --- 공개 메서드 ---

  /**
   * 힙에서 가장 작은 값(루트 노드)을 제거하고 반환합니다.
   * @returns 제거된 가장 작은 값 또는 힙이 비어있으면 null
   */

  public extractMin(): T | null {
    if (this.heapContainer.length === 0) return null;

    const min = this.heapContainer[0];
    const lastElement = this.heapContainer.pop()!;

    if (this.heapContainer.length > 0) {
      this.heapContainer[0] = lastElement;
      this.heapifyDown()
    }

    return min;
  }
}
