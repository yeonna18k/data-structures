import { beforeEach, describe, expect, it } from 'vitest';
import LinkedList from '../src/data-structures/LinkedList';

describe('LinkedList - Append & toString & getSize', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  it('새로운 리스트의 toString()은 빈 문자열을 반환해야 합니다.', () => {
    expect(list.toString()).toBe('');
    expect(list.getSize()).toBe(0);
  });

  it('append: 노드를 하나 추가하고 toString으로 확인할 수 있어야 합니다.', () => {
    list.append(10);
    expect(list.toString()).toBe('10');
    expect(list.getSize()).toBe(1);
  });

  it('append: 노드를 여러 개 추가하고 toString으로 확인할 수 있어야 합니다.', () => {
    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.toString()).toBe('10 -> 20 -> 30');
    expect(list.getSize()).toBe(3);
  });

  it('append: 다른 타입(문자열)의 데이터도 잘 처리해야 합니다.', () => {
    const strList = new LinkedList<string>();
    strList.append('A');
    strList.append('B');

    expect(strList.toString()).toBe('A -> B');
    expect(strList.getSize()).toBe(2);
  });
});

describe('LinkedList - Prepend', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  it('prepend: 빈 리스트에 노드를 성공적으로 추가해야 합니다', () => {
    list.prepend(10);
    expect(list.toString()).toBe('10');
    expect(list.getSize()).toBe(1);
  });

  it('prepend: 기존 리스트의 맨 앞에 노드를 추가해야 합니다', () => {
    list.append(10);
    list.prepend(20);
    expect(list.toString()).toBe('20 -> 10');
    expect(list.getSize()).toBe(2);
  });

  it('prepend: 여러 노드를 올바른 순서로 추가해야 합니다', () => {
    list.prepend(10);
    list.prepend(20);
    list.prepend(30);
    expect(list.toString()).toBe('30 -> 20 -> 10');
    expect(list.getSize()).toBe(3);
  });
});

describe('LinkedList - Remove', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
    list.append(10);
    list.append(20);
    list.append(30);
  });

  it('remove: head 노드를 성공적으로 삭제해야 합니다', () => {
    list.remove(10);
    expect(list.toString()).toBe('20 -> 30');
    expect(list.getSize()).toBe(2);
  });

  it('remove: 중간 노드를 성공적으로 삭제해야 합니다', () => {
    list.remove(20);
    expect(list.toString()).toBe('10 -> 30');
    expect(list.getSize()).toBe(2);
  });

  it('remove: 마지막 노드를 성공적으로 삭제해야 합니다', () => {
    list.remove(30);
    expect(list.toString()).toBe('10 -> 20');
    expect(list.getSize()).toBe(2);
  });

  it('remove: 존재하지 않는 값을 삭제하려 할 때 리스트는 변경되지 않아야 합니다', () => {
    list.remove(99);
    expect(list.toString()).toBe('10 -> 20 -> 30');
    expect(list.getSize()).toBe(3);
  });
});

describe('LinkedList - getAt', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
        list.append(10);
        list.append(20);
        list.append(30);
    });

    it('getAt: 유효한 인덱스의 값을 올바르게 반환해야 합니다', () => {
        expect(list.getAt(0)).toBe(10); // head
        expect(list.getAt(1)).toBe(20); // middle
        expect(list.getAt(2)).toBe(30); // tail
    });

    it('getAt: 유효하지 않은 인덱스에 대해 null을 반환해야 합니다', () => {
        expect(list.getAt(-1)).toBeNull(); // negative index
        expect(list.getAt(3)).toBeNull();  // out of bounds
        expect(list.getAt(99)).toBeNull(); // far out of bounds
    });

    it('getAt: 빈 리스트에서 인덱스를 가져오려 할 때 null을 반환해야 합니다', () => {
        const emptyList = new LinkedList<number>();
        expect(emptyList.getAt(0)).toBeNull();
    });
});

describe('LinkedList - insertAt', () => {
    let list: LinkedList<number>;

    beforeEach(() => {
        list = new LinkedList<number>();
        list.append(10);
        list.append(20);
        list.append(30);
    });

    it('insertAt: 인덱스 0에 노드를 성공적으로 삽입해야 합니다', () => {
        list.insertAt(5, 0);
        expect(list.toString()).toBe('5 -> 10 -> 20 -> 30');
        expect(list.getSize()).toBe(4);
    });

    it('insertAt: 중간 인덱스에 노드를 성공적으로 삽입해야 합니다', () => {
        list.insertAt(15, 1);
        expect(list.toString()).toBe('10 -> 15 -> 20 -> 30');
        expect(list.getSize()).toBe(4);
    });

    it('insertAt: 마지막 인덱스에 노드를 성공적으로 삽입해야 합니다', () => {
        list.insertAt(40, 3);
        expect(list.toString()).toBe('10 -> 20 -> 30 -> 40');
        expect(list.getSize()).toBe(4);
    });

    it('insertAt: 유효하지 않은 인덱스에 대해 null을 반환하고 리스트를 변경하지 않아야 합니다', () => {
        expect(list.insertAt(99, -1)).toBeNull();
        expect(list.insertAt(99, 4)).toBeNull();
        expect(list.toString()).toBe('10 -> 20 -> 30');
        expect(list.getSize()).toBe(3);
    });
});
