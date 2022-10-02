const nodeFactory = (value, nextNode) => { 
  return { value, nextNode }; 
};

const linkedListFactory = () => {
  let head = null;
  let size = 0;

  function append(value) {
    if (this.head === null) {
      this.head = nodeFactory(value, null);
    } else {
      let currentNode = this.head;
      
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = nodeFactory(value, null);
    }

    this.size += 1;
  }

  function prepend(value) {
    if (this.head === null) {
      this.head = nodeFactory(value, null);
    } else {
      let newNode = nodeFactory(value, this.head);

      this.head = newNode;
    }

    this.size += 1;
  }

  function tail() {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      return currentNode;
    }
  }

  function at(index) {
    if (this.head === null || index >= this.size || index < 0) {
      return null;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      
      return currentNode;
    }
  }

  function pop(index) {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode !== null) {
        if (currentNode.nextNode.nextNode === null) {
          currentNode.nextNode = null;
        } else {
          currentNode = currentNode.nextNode;
        }
      }

      size -= 1;
    }
  }

  return { append, prepend, size, head, tail, at, pop };
};

const list = linkedListFactory();

console.log(list.size);

list.append('test');
list.append('test2');

console.log(list.size);

list.prepend('prependTest');

console.log(list.size);

console.log(list.head);

console.log(list.tail());

console.log(list.at(0));
console.log(list.at(1));
console.log(list.at(2));
console.log(list.at(3));

list.pop();

console.log(list.tail());
console.log(list.head);
