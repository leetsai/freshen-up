class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
}

const linkedList = new LinkedList();

linkedList.add(3);
linkedList.add(2);
linkedList.add(1);

console.log(linkedList);