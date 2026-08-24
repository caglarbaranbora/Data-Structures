class Nodes {
  data;
  next: Nodes | null;
  data_list;

  constructor(data, next: Nodes | null, data_list){
    this.data = data;
    this.next = next;
    this.data_list = data_list;
  }
}

class LinkedList{
  head: Nodes | null;

  constructor() {
    this.head = null;
  }

  insert_at_beginning = (data: number) => {
    const node = new Nodes(data, this.head, null);
    node.next = this.head;
    this.head = node;
  }
  print = () => {
    if (this.head == null) {
      console.log("Linked list is empty");
      return;
    }

    let itr = this.head;
    let llstr = "";
    while (itr) {
      llstr += `${itr.data} -->`
      itr = itr.next;
    }
    console.log(llstr);
  }

  insert_at_end = (data: number) => {
    if (this.head == null) {
      this.head = new Nodes(data, null, null);
      return
    }

    let itr = this.head;
    while (itr.next) {
      itr = itr.next;
    }

    itr.next = new Nodes(data, null, null);
  }

  insert_values = (data_list) => {
    this.head = null;
    for (let data = 0; data <= data_list.length - 1; data++){
      this.insert_at_end(data_list[data]);
    }
  }

  get_length = () => {
    let count = 0;
    let itr = this.head;
    while (itr) {
      count++
      itr = itr.next;
    }
    return count;
  }

  remove_at = (index: number) => {
    if (index < 0 || index >= this.get_length()) {
      throw Error("Invalid index")
    }

    if (index == 0) {
      this.head = this.head.next;
      return
    }

    let count = 0;
    let itr = this.head
    while (itr) {
      if (count == index - 1) {
        itr.next = itr.next.next;
        break;
      }
      itr = itr.next;
      count++;
    }
  }
    insert_at = (index: number, data) => {
      if (index < 0 || index >= this.get_length()) {
        throw Error("Invalid index")
      }

      if (index == 0) {
        this.insert_at_beginning(data);
        return;
      }

      let count = 0;
      let itr = this.head;
      while (itr) {
        if (count == index - 1) {
          const node = new Nodes(data, itr.next, null);
          itr.next = node;
          break;
        }
        itr = itr.next;
        count++;
      }
  }

}

const ll = new LinkedList();

ll.insert_values(["banana", "mango", "grapes", "orange"])
// console.log(`length: ${ll.get_length()}`)
// ll.remove_at(1);
console.log(`length: ${ll.get_length()}`)
ll.insert_at(0, "figs");
ll.insert_at(2, "peach");
ll.print();
