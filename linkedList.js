const nodeFactory = (value, nextNode) => { 
  return { value, nextNode }; 
};

const linkedListFactory = () => {
  let head = null;
  let size = 0;

  function append(value) {
    if (head === null) {
      head = nodeFactory(value, null);
    } else {
      let currentNode = head;
      
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = nodeFactory(value, null);
    }

    this.size += 1;
  }

  function prepend(value) {
    if (head === null) {
      head = nodeFactory(value, null);
    } else {
      let newNode = nodeFactory(value, head);

      head = newNode;
    }

    this.size += 1;
  }

  const getHead = () => console.log(head);

  return { append, prepend, size, getHead };
};

const list = linkedListFactory();

console.log(list.size);

list.append('test');
list.append('test2');

console.log(list.size);

list.prepend('prependTest');

console.log(list.size);

list.getHead();
