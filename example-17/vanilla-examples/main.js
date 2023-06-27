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