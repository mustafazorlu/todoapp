let buttonAdd = document.getElementById("buttonAdd");
let inputAdd = document.getElementById("inputAdd");
let todosItems = document.getElementById("todosItems");
let todos = [];
const getTodosFromStorage = () => {
  return JSON.parse(window.localStorage.getItem("todos"));
};
const setTodosFromStorage = (list) => {
  window.localStorage.setItem("todos", JSON.stringify(list));
};
const hasUserTodos = getTodosFromStorage();
const onCompleteClicked = (todo) => {
  const id = todo.id;
  const updatedTodo = todos.filter((t) => t.id === id)[0];
  updatedTodo.complete = !updatedTodo.complete;
  setTodosFromStorage(todos);
  renderList(todos);
};
const onDeleteClicked = (todo) => {
  const id = todo.id;
  todos = todos.filter((t) => t.id !== id);
  setTodosFromStorage(todos);
  renderList(todos);
};
const renderList = (list) => {
  todosItems.innerHTML = "";
  list.map((todo) => {
    const todoDom = renderTodo(todo);
    todosItems.appendChild(todoDom);
  });
};
const renderTodo = (todo) => {
  var todoContainer = document.createElement("a");
  var div = document.createElement("div");
  var completeButton = document.createElement("button");
  var text = document.createElement("span");
  var icon = document.createElement("i");
  var removeButton = document.createElement("button");

  text.innerText = todo.text;
  removeButton.classList.add("removeBtn");
  icon.classList.add("fas");
  icon.classList.add("fa-times");
  removeButton.addEventListener("click", () => onDeleteClicked(todo));
  removeButton.appendChild(icon);
  completeButton.classList.add("chcbox");
  completeButton.addEventListener("click", () => onCompleteClicked(todo));
  div.classList.add("asdas");
  div.appendChild(completeButton);
  div.appendChild(text);
  todoContainer.appendChild(div);
  todoContainer.appendChild(removeButton);

  if (todo.complete) {
    text.style.textDecoration = "line-through";
    completeButton.style.backgroundImage = "url(./images.png)";
  }

  return todoContainer;
};

window.onload = function () {
  buttonAdd.addEventListener("click", function () {
    const text = inputAdd.value;
    const todo = {
      id: new Date().getTime(),
      text: text,
      create_date: new Date(),
      complete: false,
      deleted: false
    };

    todos.push(todo);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    renderList(todos);
  });

  if (hasUserTodos) {
    todos = getTodosFromStorage();
  } else {
    setTodosFromStorage([]);
  }

  renderList(todos);
};
