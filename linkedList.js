const nodeFactory = (value, nextNode) => { 
  return { value, nextNode }; 
};

const linkedListFactory = () => {
  let head = null;

  const append = (value) => {
    if (head === null) {
      head = nodeFactory(value, null);
    } else {
      let currentNode = head;
      
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = nodeFactory(value, null);
    }
  };

  const prepend = (value) => {
    if (head === null) {
      head = nodeFactory(value, null);
    } else {
      let newNode = nodeFactory(value, head);

      head = newNode;
    }
  };

  const getHead = () => console.log(head);

  return { append, prepend, getHead };
};

const list = linkedListFactory();
list.append('test');
list.append('test2');
list.prepend('prependTest')

list.getHead();
