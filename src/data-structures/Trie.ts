import TrieNode from "./TrieNode";

export default class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  /**
   * 단어의 각 문자를 순회하며 주어진 문자열을 트라이에 추가합니다.
   * @param word
   */
  public insert(word: string): void {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        currentNode.children[char] = new TrieNode()
      }
      currentNode = currentNode.children[char];
    }
    currentNode.isEndOfWord = true;
  }

  /**
   * 주어진 단어가 트라이에 완전한 단어로 존재하는지 확인합니다.
   * @param word
   * @returns 완전한 단어로 존재하면 true, 아니면 false
   */
  public search(word: string): boolean {
    let currentNode = this.root;

    for (const char of word) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char]
    }

    return currentNode.isEndOfWord;
  }

  /**
   * 주어진 접두사로 시작하는 단어가 트라이에 존재하는지 확인합니다.
   * @param prefix
   * @returns 접두사가 존재하면 true, 아니면 false
   */
  public startsWith(prefix: string) {
    let currentNode = this.root;

    for (const char of prefix) {
      if (!currentNode.children[char]) {
        return false;
      }
      currentNode = currentNode.children[char]
    }

    return true;
  }
}
