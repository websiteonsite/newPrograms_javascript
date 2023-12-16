const user1 = {
  username: 'Sudha',
  age: 22,
  marks:{
    maths:50,
    eng:65
  }

  };

//Deep Copy and shallow Copy

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Shallow Copy

// const user2 = { ...user1 };
// console.log(user2);
// console.log(user1);

// user2.username = 'Harry';
// console.log(user2);
// console.log(user1);

//Object.assign
const user2 = Object.assign({}, user1);
console.log(user2);
console.log(user1);

user2.username = 'Harry';
user2.marks.maths = 20;
console.log(user2);
console.log(user1);
