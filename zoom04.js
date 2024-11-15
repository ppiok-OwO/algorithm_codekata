class Node {
  constructor(data) {
    // data = "흑연"
    this.data = data;
    this.next = null; // 초기에는 다음 노드가 없으므로 NULL로 초기화!
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  peek() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }

  push(value) {
    let newHead = new Node(value); // [3] 을 만들고!
    newHead.next = this.head; // [3] -> [4] 로 만든다음에
    this.head = newHead; // 현재 head의 값을 [3] 으로 바꿔준다.
  }

  pop() {
    if (this.head === null) return null;

    let popHead = this.head;
    this.head = popHead.next; // 혹은 this.head.next?

    return popHead;
  }
  // 질문있습니다! this.head = deleteHead.next;라고 해도 같은 방식으로 작동하나요?
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 큐에 노드 더하기
  enqueue(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // 만약 비어있다면,
      this.head = newNode; // head(Front)에 new_node를
      this.tail = newNode; // tail(Rear)에 new_node를 넣어줍니다!
    } else {
      // 비어있지 않다면 기존 tail에 새 노드를 포인터로 연결하고요!
      this.tail.next = newNode;
      // 새 노드를 tail로 설정해요!
      this.tail = newNode;
    }
  }

  // 큐에서 노드 제거학기
  dequeue() {
    if (this.head === null) {
      return null;
    }
    const deleteHead = this.head; // 제거할 node를 변수에 잡습니다.

    this.head = this.head.next; // 그리고 head(Front)를 현재 head의 다음 걸로 잡으면 됩니다.

    return deleteHead.value; // 그리고 제거할 node 반환을 해요!
  }
}
