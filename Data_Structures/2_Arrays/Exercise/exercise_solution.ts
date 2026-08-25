// #1 ------------------------------------------------------------------

// #2 ------------------------------------------------------------------
let heroes = ['spider man', 'thor', 'hulk', 'iron man', 'captain america'];

const log = (array) => {
  let length = length_of_list(array);
  let arrayStr = ""
  for (let i = 0; i <= length - 1; i++) {
    arrayStr += `${array[i]} -->`
  }
  return arrayStr;
}

const length_of_list = (array) => {//you can achieve this with array.length
  let count = 0;                   //but the important thing here
  while (array[count]) {           //is the tought of it
    count++;
  }
    return count;
  }

const add_at_end = (array, data_to_add) => {
  let length = length_of_list(array);
    array[length] = data_to_add;
  return console.log(array);
  }

const remove_at_end = (array, data_to_delete) => {
  let length = length_of_list(array);
  array[length - 1] = "";
  return array;
}

const add_after = (array, data_after, data_to_add) => {
  let length = length_of_list(array);
  for (let i = 0; i <= length; i++){
    if (array[i] == data_after) {
      for (let j = length; j > i; j--){
        array[j] = array[j - 1];
      }
      array[i + 1] = data_to_add;
      break;
    }
  }
  return array;
}

console.log(length_of_list(heroes));
log(heroes);
console.log(add_at_end(heroes, "black panther"));
log(heroes);
console.log(length_of_list(heroes));
remove_at_end(heroes, "black panther");
console.log(add_after(heroes, "hulk", "black panther"));
log(heroes);
console.log(length_of_list(heroes));

// #3 ------------------------------------------------------------------
