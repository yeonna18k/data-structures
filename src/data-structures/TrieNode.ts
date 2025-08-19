export default class TrieNode {
  public children: { [key: string]: TrieNode};
  public isEndOfWord: boolean

  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
