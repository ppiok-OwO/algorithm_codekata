class Node {
  constructor(data) {
    // data = "흑연"
    this.data = data;
    this.next = null; // 초기에는 다음 노드가 없으므로 NULL로 초기화!
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value); // head 에 시작하는 Node 를 연결합니다.
  }

  // LinkedList 가장 끝에 있는 노드에 새로운 노드를 연결합니다.
  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      // curr의 다음이 끝에 갈 때까지 이동합니다.
      curr = curr.next;
    }
    // 이곳으로 왔다는 것은요
    // while 루프를 탈출했다는 의미
    // 탈출을 하려면 curr.next !== null 이 조건이 지켜지지 않아야 함
    // curr.next === nulll
    curr.next = new Node(value);
  }

  getNode(index) {
    let currnode = this.head;

    for (let i = 0; i < index; i++) {
      currnode = currnode.next;
    }
    return currnode;
  }

  addNode(index, value) {
    // ["자갈"] -> ["흑연"] -> ["밀가루"] -> ["우편"]
    // 이때까지는, this.head = ["자갈"]
    // ["짱짱"]이라는 친구를 0번째 index로 추가
    // ["짱짱"] -> ["자갈"]
    // this.head = ["짱짱"]
    // ["짱짱"] -> ["자갈"] -> ["흑연"] -> ["밀가루"] -> ["우편"]
    const newNode = new Node(value); // 일단 새로운 값을 기준으로 새 노드를 만들어요!
    if (index === 0) { // 0번째에 추가를 하고 싶다면!
      newNode.next = this.head; // 원래 Head였던 노드를 새 노드의 next로 지정해요!
      this.head = newNode; // 그리고, Head를 새 노드로 바꾸어줍니다!
      return;
    }

		// [3] - [4] - [5]에서 [3] - [4] - [6] - [5]로 6을 중간에 넣는다고 할게요!
		// 추가하고 싶은 index의 이전 노드 정보를 갖고옵니다! 여기선 [4] 입니다.
    const node = this.getNode(index - 1);
    // 1. 이전 노드([4])의 포인터([5])를 next_node로 임시 저장해요!
    const nextNode = node.next;
    // [4] -> [6]
    // 2. 이전 노드([4])의 포인터를 [6]으로 지정합니다!
    node.next = newNode;
    // [6] -> [5]
    // 3. 새로 삽입한 노드([6])의 포인터를 next_node인 [5]으로 지정합니다!
    newNode.next = nextNode;
  }
}
}
