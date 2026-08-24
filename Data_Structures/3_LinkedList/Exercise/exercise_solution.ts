class Items {
  data;
  next;
  data_list;

  constructor(data, next, data_list) {
    this.data = data;
    this.next = next;
    this.data_list = data_list;
  }
}

class LinkedList_Example{
  head: Items | null;

  constructor() {
    this.head = null;
  }

  print = () => {
    if (this.head == null) {
      console.log("Linked list is empty");
      return;
    }

    let itr = this.head;
    let linkedListString = '';
    while (itr) {
      linkedListString += `${itr.data} -->`;
      itr = itr.next;
    }
    console.log(linkedListString);
  }

  get_length = () => {
    let count = 0;
    let itr = this.head;
    while (itr) {
      count++;
      itr = itr.next;
    }
    return count;
  }

  insert_at_end = (data) => {
    if (this.head == null) {
      this.head = new Items(data, null, null);
      return
    }

    let itr = this.head;
    while (itr.next) {
      itr = itr.next;
    }

    itr.next = new Items(data, null, null);
  }

  insert_values = (item_list) => {
    this.head = null;
    for (let item = 0; item <= item_list.length - 1 ; item++){
      this.insert_at_end(item_list[item]);
    }
  }

  insert_at_beginning = (data) => {
    const node = new Items(data, this.head, null);
    node.next = this.head;
    this.head = node;
  }

  insert_after_value = (data_after, data_to_insert) => {
    // Search for first occurance of data_after value in linked list
    // Now insert data_to_insert after data_after node
    if (this.head == null) return;

    if (this.head.data == data_after) {
      this.head.next = new Items(data_to_insert, this.head.next, null);
      return;
    }

    let itr = this.head;
    while (itr) {
      if (itr.data == data_after) {
        itr.next = new Items(data_to_insert, itr.next, null);
        break;
      }
      itr = itr.next;
    }
  }

    remove_by_value = (data) => {
      // Remove first node that contains data

      if (this.head == null) return;

      if (this.head.data == data) {
        this.head = this.head.next;
      }

      let itr = this.head;
      while (itr.next) {
        if (itr.next.data == data) {
          itr.next = itr.next.next;
          break;
        }
        itr = itr.next;
      }
    }
}


const linkedList = new LinkedList_Example();
linkedList.insert_values(["banana", "mango", "grapes", "orange"])
linkedList.print();
linkedList.insert_after_value("grapes", "apple");
linkedList.print();
linkedList.remove_by_value("apple")
linkedList.print()
