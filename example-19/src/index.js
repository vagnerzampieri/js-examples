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

  const name = 'wes';
  const cool = true;
  const dog = undefined;
  const person = {
    name: 'wes',
    age: 100,
  };

  console.log(name);
  console.log(cool);
  console.log(dog);
  console.log(person);

  dog = 'snickers'; // const cannot be reassigned
  console.log(dog);
}
