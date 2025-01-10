class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 요소 삽입 메소드
  insert(value) {
    this.heap.push(value); // 새 값을 힘 배열의 끝에 추가
    this.bubbleUp(); // 버블 업으로 올바른 위치로 재정렬
  }

  // 버블 업 메소드
  bubbleUp() {
    let index = this.heap.length - 1; // 삽입된 노드의 인덱스

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); //부모 노드의 인덱스
      if (this.heap[index] > this.heap[parentIndex]) {
        let tempValue = this.heap[index];
        this.heap[index] = this.heap[parentIndex];
        this.heap[parentIndex] = tempValue;

        index = parentIndex;
      } else {
        break;
      }
    }
  }

  printHeap() {
    console.log(this.heap);
  }
}

const heap = new MaxHeap();

heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(30);

heap.printHeap(); // [30, 20, 5, 10]
