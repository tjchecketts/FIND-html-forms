var input = document.getElementById('input');
var list = document.getElementById('list');
var form = document.getElementById('add-items');

function addItem(e) {
  e.preventDefault();
  var item = input.value;
  list.innerHTML += "<li>" + item + "</li>";
  form.reset();
}

form.addEventListener('submit', addItem);

