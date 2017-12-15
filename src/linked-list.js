class LinkedList {
   constructor() {
     this.head = null;
     this.tail = null;
   }

   addToTail(value) {
     const newNode = { value, next: null };
     if (!this.head) {
       this.head = newNode;
       this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
  }
}

  removeHead(value) {
    if (!this.head) return null;
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  contains(value) {
    let currentHead = this.head;
    while (currentHead.next) {
      if (currentHead.value === value) return true;
      currentHead = currentHead.next;
    }
    return false;
  }

  forEach(cb) {
    if (!this.head) return;
    let current = this.head;
    cb(current);
    while (current.next) {
      current = current.next;
    cb(current);
    }
  }
}

module.exports = LinkedList;
