const form = document.querySelector("form");

function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

function getTodos() {
  list.innerHTML = window.localStorage.todoList;
}

getTodos();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li><span>*</span> ${item.value}</li>`;
  item.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  e.target.remove();
  storeList();
});
