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
    console.log("curr.next:", curr.next);
    const newNode = new Node(value);
    curr.next = newNode;
  }

  getNode(index) {
    let currnode = this.head;

    for (let i = 0; i < index; i++) {
      currnode = currnode.next;
    }

    console.log(currnode.data);
  }
}
