export const saveTodo = (todo) => {
  if (!localStorage.getItem("todo")) {
    const data = [todo];

    localStorage.setItem("todo", JSON.stringify(data));
  } else {
    //getting the localtsorage data
    let data = localStorage.getItem("todo");

    data = JSON.parse(data);
    data.push(todo);
    localStorage.setItem("todo", JSON.stringify(data));
  }
};

export const completeTodo = (index) => {
  const todos = JSON.parse(localStorage.getItem("todo"));

  const newTodos = todos.map((todo, todoiindex) => {
    if (todoiindex == index) {
      todo.completed = true;
    }
    return todo;
  });

  localStorage.setItem("todo", JSON.stringify(newTodos));
};

export const clearCompletedTodo = () => {
  const todos = JSON.parse(localStorage.getItem("todo"));

  const newTodos = todos.filter((todo) => {
    return todo.completed == false;
  });

  localStorage.setItem("todo", JSON.stringify(newTodos));
};
