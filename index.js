class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      return this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
    }

    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let prev = this.head;

    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }

    if (prev.next) {
      let removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
      return value;
    }
    return null;
  }

  print() {
    let listValues = "";
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
    }

    return listValues;
  }
}

const list = new LinkedList();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.append(40);
list.insert(50, 4);
list.remove(4);
list.removeValue(10);
console.log(list.print());
