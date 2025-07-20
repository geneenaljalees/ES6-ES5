// convert to arrow function
const sumNum = (num1, num2) => {
  return num1 + num2;
};

const odds = evens.map((v) => v + 1);

// Add default parameters to sum to have the same functionality
const sum = (x = 0, y = 7, z = 42) => {
  return x + y + z;
};

const calculateArea = (height, width) => {
  height = height || 50;
  width = width || 80;
  return height * width;
};

// destruct function arguments
const getUserData = ({ name: { firstName, lastName }, age }) => {
  console.log(firstName, lastName, age);
};

// what about array destructuring
let list = [1, 2, 3];
let [a, , b] = list;

// use template literals
let customer = { name: 'Foo' };
let card = { amount: 7, product: 'Bar', unitprice: 42 };

let message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
 total of ${card.amount * card.unitprice} bucks?`;

// short syntax for object properties in obj below
let x = 0;
let y = 0;
let obj = { x, y };
