// Nullish coalescing operator

const idade = null;

document.body.innerHTML = 'Sua idade é: ' + (idade ?? 'Não informada');

// Objetos

const user = {
  name: 'João',
  age: 20,
  address: {
    street: 'Rua 1',
    number: 123
  }
}

document.body.innerHTML = ('age' in user);
document.body.innerHTML = Object.keys(user);
document.body.innerHTML = Object.values(user);
document.body.innerHTML = JSON.stringify(user);

// Desestruturação

const { name: firstName, lastName = 'Marques', age, address: { street, number } } = user;

document.body.innerHTML = JSON.stringify({ firstName, lastName, age, street, number });

function showAge({ age }) {
  document.body.innerHTML = age;
}

showAge(user);

// Rest operator

// const { name, ...rest } = user;

// document.body.innerHTML = JSON.stringify({ rest });

const arr = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr;
// const [a, b, c] = arr;
const [a, , ...c] = arr;

// document.body.innerHTML = JSON.stringify({ a, b, c });
document.body.innerHTML = JSON.stringify({ a, c });

// Short syntax

const name = 'João';
const height = 190;

const person = {
  name,
  height,
};

document.body.innerHTML = JSON.stringify(person);

// Optional chaining

document.body.innerHTML = user.address?.street;

const user2 = {
  name: 'João',
  lastName: 'Marques',
  age: 20,
  address: {
    street: 'Rua 1',
    number: 123
  },
  showFullName() {
    return `${this.name} ${this.lastName}`;
  }
}

document.body.innerHTML = user2.showFullName?.();

// Métodos de array
// map, filter, reduce, find, findIndex, some, every

const arr2 = [1, 2, 3, 4, 5];

const newArra2 = arr2.map(item => {
  if (item % 2 === 0) {
    return item * 2;
  }

  return item;
});

document.body.innerHTML = JSON.stringify(newArra2);

const newArra3 = arr2
  .filter(item => item % 2 === 0)
  .map(item => item * 2);

document.body.innerHTML = JSON.stringify(newArra3);

const everyItemsAsNumber = arr2.every(item => typeof item === 'number');

document.body.innerHTML = JSON.stringify(everyItemsAsNumber);

const someItemsAsNotNumber = arr2.some(item => typeof item !== 'number');

document.body.innerHTML = JSON.stringify(someItemsAsNotNumber);

const par = arr2.find(item => item % 2 === 0);

document.body.innerHTML = JSON.stringify(par);

const parIndex = arr2.findIndex(item => item % 2 === 0);

document.body.innerHTML = JSON.stringify(parIndex);

const sum = arr2.reduce((total, current) => total += current, 0);

document.body.innerHTML = JSON.stringify(sum);

// Template literals

const message = `Hello World!, ${user.name}`;

document.body.innerHTML = message;

// Promisess

// .then()/catch()

const sumTwoNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

sumTwoNumbers(10, 20)
  .then(soma => {
    document.body.innerHTML = soma;
  })
  .catch(error => {
    console.log(error);
  });


// fetch('https://api.github.com/users/vagnerzampieri')
//   .then(response => response.json().then(body => console.log(body.name)))
//   .catch(error => console.log(error));

// fetch('https://api.github.com/users/vagnerzampieri')
//   .then(response => response.json())
//   .then(body => console.log(body.name))
//   .catch(error => console.log(error))
//   .finally(() => console.log('finally'));

// async/await

async function findGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const body = await response.json();

  console.log(body);;  
} 

findGithubUser('vagnerzampieri');