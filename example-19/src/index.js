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
  const person = {
    name: 'wes',
    age: 100,
  };

  console.log(name);
  console.log(cool);
  console.log(rating);
  console.log(dog);
  console.log(tap);
  console.log(sym);
  console.log(person);

  // dog = 'snickers'; // const cannot be reassigned
  console.log(dog);

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
  console.log(fruits);
  console.log(fruits[1]);
  console.log(fruits.slice(0, 3)); // [ 'apples', 'oranges', 'pears' ]
}
