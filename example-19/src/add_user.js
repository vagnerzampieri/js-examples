console.log(window);

// single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// multiple element
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// manipulate DOM

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// events
// click, mouseover, mouseout, mouseenter, mouseleave, mousemove
btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});

// keyboard events

const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', (e) => {
  document.querySelector('.container').append(nameInput.value);
});

// user form script

// put DOM elements into variables

const myForm = document.querySelector('#my-form');
const nameInput2 = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// listen for form submit

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput2.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // create new list item with user
    const li = document.createElement('li');

    // add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput2.value} : ${emailInput.value}`)
    );

    // append li to ul
    userList.appendChild(li);

    // clear fields
    nameInput2.value = '';
    emailInput.value = '';
  }
}
