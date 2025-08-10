import { beforeEach, describe, expect, it } from 'vitest';
import LinkedList from '../src/data-structures/LinkedList';

describe('LinkedList - Append & ToString', () => {
  let list: LinkedList<number>;

  // 각 테스트가 실행되기 전에 항상 새로운 리스트를 생성합니다.
  beforeEach(() => {
    list = new LinkedList<number>();
  });

  it('새로운 리스트의 toString()은 빈 문자열을 반환해야 합니다.', () => {
    // expect(A).toBe(B): A의 결과가 B와 같은지 확인합니다.
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

    expect(list.toString()).toBe('10,20,30');
    expect(list.getSize()).toBe(3);
  });

  it('append: 다른 타입(문자열)의 데이터도 잘 처리해야 합니다.', () => {
    const strList = new LinkedList<string>();
    strList.append('A');
    strList.append('B');

    expect(strList.toString()).toBe('A,B');
  });
});
