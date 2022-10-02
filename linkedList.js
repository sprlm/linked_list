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

  return { append, prepend, size, head };
};

const list = linkedListFactory();

console.log(list.size);

list.append('test');
list.append('test2');

console.log(list.size);

list.prepend('prependTest');

console.log(list.size);

console.log(list.head);
