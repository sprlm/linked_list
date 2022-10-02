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

  function find(value) {
    if (this.head === null) {
      return null;
    } else {
      let currentNode = this.head;
      let index = 0;
      
      while (currentNode.nextNode !== null) {
        if (currentNode.value === value) {
          return index;
        }

        currentNode = currentNode.nextNode;
        index++;
      }

      if (currentNode.value === value) {
        return index;
      } else {
        return null;
      }
    }
  }

  return { append, prepend, size, head, tail, at, pop, find };
};

const list = linkedListFactory();

console.log(list.find('anything'));

list.append('apple');
list.append('banana');
list.append('carrot');

console.log(list.find('apple'));
console.log(list.find('banana'));
console.log(list.find('carrot'));
console.log(list.find('dragonfruit'));
