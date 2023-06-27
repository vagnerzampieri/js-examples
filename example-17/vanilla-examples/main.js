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