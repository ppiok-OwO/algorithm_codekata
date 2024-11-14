// 정태님이 작성하신 거

class Node {
  constructor(data) {
    this.data = data; // 머리
    this.next = null; // 꼬리
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0; // 리스트의 크기
  }

  addNode(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  getNode(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    console.log(current.data);
  }

  //출력
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// 테스트
const list = new LinkedList();
list.addNode("흑연");
list.addNode("자갈");
list.getNode(0);
list.print();
