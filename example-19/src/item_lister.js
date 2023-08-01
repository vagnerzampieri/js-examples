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
console.log(document.links[0].id); // clearBtn
console.log(document.links[0].className); // btn btn-dark btn-block
console.log(document.links[0].classList); // DOMTokenList(3) ["btn", "btn-dark", "btn-block", value: "btn btn-dark btn-block"]
console.log(document.links[0].classList[0]); // btn
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
