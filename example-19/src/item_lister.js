// JavaScript DOM Crash Course - Part 1
// https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=2

// examine the document object
console.dir(document); // document object
console.log(document.location); // location object
console.log(document.location.hostname); // localhost
console.log(document.location.port); // 5173
console.log(document.location.href); // http://localhost:5173/item_lister.html
console.log(document.location.search); // empty string
console.log(document.location.hash); // empty string
console.log(document.location.pathname); // /item_lister.html
console.log(document.location.protocol); // http:
console.log(document.URL); // http://localhost:5173/item_lister.html

console.log(document.title); // Item Lister
// document.title = 'Item Lister App';

console.log(document.doctype); // <!DOCTYPE html>
console.log(document.head); // <head>...</head>
console.log(document.body); // <body>...</body>
console.log(document.forms); // HTMLCollection(1) [form#addForm]
console.log(document.forms[0]); // <form id="addForm">...</form>
console.log(document.forms[0].id); // addForm
console.log(document.forms[0].method); // get
console.log(document.forms[0].action); // http://localhost:5173/item_lister.html
console.log(document.links); // HTMLCollection(1) [a#clearBtn.btn.btn-dark.btn-block]
console.log(document.links[0]); // <a id="clearBtn" class="btn btn-dark btn-block" href="#">Clear</a>
// console.log(document.links[0].id); // clearBtn
// console.log(document.links[0].className); // btn btn-dark btn-block
// console.log(document.links[0].classList); // DOMTokenList(3) ["btn", "btn-dark", "btn-block", value: "btn btn-dark btn-block"]
// console.log(document.links[0].classList[0]); // btn
console.log(document.images); // HTMLCollection []
console.log(document.scripts); // HTMLCollection(2) [script, script]

// GET ELEMENT BY ID //

console.log(document.getElementById('header-title')); // <h1 id="header-title" class="title">Item Lister</h1>
const headerTitle = document.getElementById('header-title');
console.log(headerTitle); // <h1 id="header-title" class="title">Item Lister</h1>
console.log(headerTitle.textContent); // Item Lister
console.log(headerTitle.innerText); // Item Lister
console.log(headerTitle.innerHTML); // innerHTML is the same as innerText, but pays attention to styling
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

// GET ELEMENTS BY CLASS NAME //

const items = document.getElementsByClassName('list-group-item');
console.log(items); // HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
console.log(items[0]); // <li class="list-group-item">Item 1</li>
console.log(items[0].textContent); // Item 1
console.log(items[1].textContent); // Item 2
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
}

// GET ELEMENTS BY TAG NAME //

const li = document.getElementsByTagName('li');
console.log(li); // HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
console.log(li[0]); // <li class="list-group-item">Item 1</li>
console.log(li[0].textContent); // Item 1
console.log(li[1].textContent); // Item 2
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// querySelector //

const header = document.querySelector('#main-header');
console.log(header); // <h1 id="main-header" class="title">Item Lister</h1>
// header.style.borderBottom = 'solid 4px #ccc';

const input = document.querySelector('input');
console.log(input); // <input type="text" class="form-control" id="item" placeholder="Add New Item...">
// input.value = 'Hello World';

const submit = document.querySelector('input[type="submit"]');
console.log(submit); // <input type="submit" value="Submit" class="btn btn-dark btn-block">
submit.value = 'SEND';

const item = document.querySelector('.list-group-item');
console.log(item); // <li class="list-group-item">Item 1</li>
// item.style.color = 'red';

const lastItem = document.querySelector('.list-group-item:last-child');
console.log(lastItem); // <li class="list-group-item">Item 4</li>
// lastItem.style.color = 'blue';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItem); // <li class="list-group-item">Item 2</li>
// secondItem.style.color = 'coral';

// querySelectorAll //

const titles = document.querySelectorAll('.title');
console.log(titles); // NodeList(2) [h1#header-title.title, h3.title]
console.log(titles[0]); // <h1 id="header-title" class="title">Item Lister</h1>
console.log(titles[1]); // <h3 class="title">Hello</h3>
// titles[0].textContent = 'Hello';

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');
console.log(odd); // NodeList(2) [li.list-group-item, li.list-group-item]
console.log(even); // NodeList(2) [li.list-group-item, li.list-group-item]
for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = '#f4f4f4';
  even[i].style.backgroundColor = '#ccc';
}

// TRAVERSING THE DOM //

let itemList = document.querySelector('#items');

// parentNode
console.log(itemList.parentNode); // <div class="container">...</div>
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement
console.log(itemList.parentElement); // <div class="container">...</div>
// itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes
console.log(itemList.childNodes); // NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]

// children
console.log(itemList.children); // HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
console.log(itemList.children[1]); // <li class="list-group-item">Item 2</li>
// itemList.children[1].style.backgroundColor = 'yellow';

// firstChild
console.log(itemList.firstChild); // #text
// firstElementChild
console.log(itemList.firstElementChild); // <li class="list-group-item">Item 1</li>
// itemList.firstElementChild.textContent = 'Hello 1';

// lastChild
console.log(itemList.lastChild); // #text
// lastElementChild
console.log(itemList.lastElementChild); // <li class="list-group-item">Item 4</li>
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
console.log(itemList.nextSibling); // #text
// nextElementSibling
console.log(itemList.nextElementSibling); // <div class="card card-body">...</div>

// previousSibling
console.log(itemList.previousSibling); // #text
// previousElementSibling
console.log(itemList.previousElementSibling); // <h3 class="title">Hello</h3>
// itemList.previousElementSibling.style.color = 'green';

// createElement

// create a div
const newDiv = document.createElement('div');
console.log(newDiv); // <div></div>

// add class
newDiv.className = 'hello';

// add id
newDiv.id = 'hello1';

// add attribute
newDiv.setAttribute('title', 'Hello Div');

// create text node
const newDivText = document.createTextNode('Hello World');
console.log(newDivText); // #text

// add text to div
newDiv.appendChild(newDivText);
console.log(newDiv); // <div class="hello" id="hello1" title="Hello Div">Hello World</div>

// insert newDiv into DOM
const container = document.querySelector('header .container');
const h1 = document.querySelector('header h1');
console.log(newDiv); // <div class="hello" id="hello1" title="Hello Div">Hello World</div>

container.insertBefore(newDiv, h1);
console.log(newDiv); // <div class="hello" id="hello1" title="Hello Div">Hello World</div>

newDiv.style.fontSize = '30px';

// EVENTS //

const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
  // console.log('Button clicked');
  // document.getElementById('header-title').textContent = 'Changed';
  // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
  // console.log(e); // MouseEvent {isTrusted: true, screenX: 120, screenY: 120, clientX: 120, clientY: 120, …}
  // console.log(e.target); // <button id="button" class="btn btn-dark">Click Me</button>
  // console.log(e.target.id); // button
  // console.log(e.target.className); // btn btn-dark
  // console.log(e.target.classList); // DOMTokenList(2) ["btn", "btn-dark", value: "btn btn-dark"]
  // const output = document.getElementById('output');
  // output.innerHTML = '<h3>' + e.target.id + '</h3>';
  // console.log(e.type); // click
  // console.log(e.clientX); // 120
  // console.log(e.clientY); // 120
  // console.log(e.offsetX); // 120
  // console.log(e.offsetY); // 120
  // console.log(e.altKey); // false
  // console.log(e.ctrlKey); // false
  // console.log(e.shiftKey); // false
}

const button2 = document.getElementById('button')
const box = document.getElementById('box');

// button2.addEventListener('click', runEvent);
// button2.addEventListener('dblclick', runEvent);
// button2.addEventListener('mousedown', runEvent);
// button2.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent); // fires when mouse enters the box, but not when it enters a child element
// box.addEventListener('mouseleave', runEvent); // fires when mouse leaves the box, but not when it leaves a child element
// box.addEventListener('mouseover', runEvent); // fires when mouse enters the box, including when it enters a child element
// box.addEventListener('mouseout', runEvent); // fires when mouse leaves the box, including when it leaves a child element

// box.addEventListener('mousemove', runEvent); // fires when mouse moves inside the box, including when it moves inside a child element

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let output = document.getElementById('output');
let select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent); // fires when a key is pressed
// itemInput.addEventListener('keyup', runEvent); // fires when a key is released
// itemInput.addEventListener('keypress', runEvent); // fires when a key is pressed
// itemInput.addEventListener('focus', runEvent); // fires when the input field is clicked
// itemInput.addEventListener('blur', runEvent); // fires when the input field is clicked away from
// itemInput.addEventListener('cut', runEvent); // fires when the input field is cut
// itemInput.addEventListener('paste', runEvent); // fires when the input field is pasted
// itemInput.addEventListener('input', runEvent); // fires when the input field is cut, pasted, or typed into

// select.addEventListener('change', runEvent); // fires when a new option is selected
// select.addEventListener('input', runEvent); // fires when a new option is selected

// form.addEventListener('submit', runEvent); // fires when the submit button is clicked

function runEvent(e) {
  e.preventDefault();
  console.log('Event Type: ' + e.type); // Event Type: click

  // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>'; // MouseX: 120 MouseY: 120, gets the position of the mouse relative to the box

  // box.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)'; // changes the background color of the box based on the position of the mouse relative to the box

  // document.body.style.backgroundColor = 'rgb(' + e.offsetX + ', ' + e.offsetY + ', 40)'; // changes the background color of the body based on the position of the mouse relative to the body

  // console.log(e.target.value); // gets the value of the input field
  // output.innerHTML = '<h3>' + e.target.value + '</h3>'; // displays the value of the input field in the output div
}
