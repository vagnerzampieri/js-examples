export default function index() {
  console.log('hello world');
  console.error('this is an error');
  console.warn('this is a warning');

  // var, let, const
  // var is function scoped, is global if not in a function
  // let and const are block-level scoped
  // const cannot be reassigned
  // let can be reassigned

  let age = 100;
  age = 200;

  console.log(age);

  // String, Numbers, Boolean, null, undefined, Symbol
  const name = 'wes';
  const cool = true;
  const rating = 4.5;
  const dog = undefined;
  const tap = null;
  const sym = Symbol('foo');

  console.log(name);
  console.log(cool);
  console.log(rating);
  console.log(dog);
  console.log(tap);
  console.log(sym);

  // dog = 'snickers'; // const cannot be reassigned
  // console.log(dog);

  // concatenation
  const sentence = 'she\'s so cool';
  const sentence2 = "she's so cool";
  const sentence3 = `she's so cool`;
  const song = 'ohh\
  \''; // multiline string
  const song2 = `ohh
  yeah`; // multiline string

  console.log(sentence);
  console.log(sentence2);
  console.log(sentence3);
  console.log(song);
  console.log(song2);
  console.log(`hello my name is ${name}. Nice to meet you. I am ${age} years old.`);
  console.log('1' + 1);

  const hello = 'Hello World';
  console.log(hello.toUpperCase());
  console.log(hello.toLowerCase());
  console.log(hello.length)
  console.log(hello.substring(0, 5));
  console.log(hello.split(''));

  // Arrays - variables that hold multiple values
  const numbers = new Array(1, 2, 3, 4, 5);
  console.log(numbers);

  const fruits = ['apples', 'oranges', 'pears', 10, true];
  console.log(fruits[1]);
  console.log(fruits.slice(0, 3)); // [ 'apples', 'oranges', 'pears' ]
  console.log(fruits.push('mangos')); // add to end
  console.log(fruits.unshift('strawberries')); // add to beginning
  console.log(fruits.pop()); // remove last element
  console.log(fruits.shift()); // remove first element
  console.log(fruits);
  console.log(fruits.indexOf('oranges')); // 1
  console.log(Array.isArray(fruits)); // true

  // Object literals
  const person = {
    name: 'wes',
    age: 100,
    hobbies: ['eating', 'fighting'],
    address: {
      street: '123 main st',
      city: 'boston'
    }
  };

  // property accessors
  console.log(person);
  console.log(person.name);
  console.log(person.hobbies[1]);
  console.log(person.address.city);

  const { hobbies, address: { city } } = person;
  console.log(hobbies);
  console.log(city);

  person.email = 'wes@gmail.com'
  console.log(person);

  // array of objects
  const todos = [
    {
      id: 1,
      text: 'take out trash',
      isCompleted: true
    },
    {
      id: 2,
      text: 'meeting with boss',
      isCompleted: true
    },
    {
      id: 3,
      text: 'dentist appt',
      isCompleted: false
    }
  ];

  console.log(todos);
  console.log(todos[1].text);
  console.log(JSON.stringify(todos));

  // loops
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }

  // loop through array
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
  }

  // for of loop
  for (let todo of todos) {
    console.log(todo.text);
  }

  // high order array methods
  // forEach() - loops through array
  todos.forEach(function(todo) {
    console.log(todo.text);
  });

  // map() - loops through array and creates new array
  const todoText = todos.map(function(todo) {
    return todo.text;
  });

  console.log(todoText);

  // filter() - returns an array based on condition
  const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
  }).map(function(todo) {
    return todo.text;
  });

  console.log(todoCompleted);

  // conditionals
  const x = 10;

  if (x === 10) {
    console.log('x is 10');
  } else if (x > 10) {
    console.log('x is greater than 10');
  } else {
    console.log('x is less than 10');
  }

  // switch
  const color = 'red';

  switch(color) {
    case 'red':
      console.log('color is red');
      break;
    case 'blue':
      console.log('color is blue');
      break;
    default:
      console.log('color is not red or blue');
      break;
  }

  // ternary operator

  const color2 = x > 10 ? 'red' : 'blue';
  console.log(color2);

}
