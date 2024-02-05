// // this is a way to implement array manually simply in javascript

// // the 'this'keyword
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called)
// anyhoo, let's start our code, it's a simple code and has great learning value
// REMEMBER, a good mechanic knows what's under the hood

//also, we will use Classes and Constructors in this, so we should get acquinted with the concept

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  // this is the push function, which we use to
  // enter an element into the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  //   okay so, this is the pop function that we use to take out
  //   the last element of the array as seen here, we use
  //   to reduce the size of the array and delete the element

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //   alright, one of the most interesting and bizarre thing about javacript is this
  //   feature called hoisting. Hoisting is done when a variable is used
  //   before decalring the variable itself
  //   for example
  //                 x= 8+5;
  //                 var x;
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

// in order to run the code in VS code, please go into a terminal and type
// node name_of_js_file.js
const Array = new myArray();
Array.push(5);
Array.push(6);
Array.push(9);
Array.push(7);
Array.pop();
Array.push(2);
Array.push(1);
Array.push("hello");
console.log(Array);
Array.delete(1);
console.log(Array);
console.log(Array.get(1));
