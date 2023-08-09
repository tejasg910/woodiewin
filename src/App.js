import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { MyContext } from "./context";
import { useEffect, useState } from "react";
import { saveTodo } from "./oprations";
import { toast } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  const [key, setKey] = useState(null);
  const [currentTab, setCurrentTab] = useState({
    addtodo: true,
    showtodo: false,
  });

  const [todo, setTodo] = useState({
    message: "",
    completed: false,
  });

  const onHandleChange = (e) => {
    setTodo({ message: e.target.value, completed: false });
  };
  const handleSubmit = () => {
    //saving the todo in localstore
    if (todo.message !== "") {
      saveTodo(todo);
      setTodo({ message: "", completed: false });
      toast.success("Todo added successfully");
      const todos = JSON.parse(localStorage.getItem("todo"));
      setTodos(todos);
    } else {
      setTodo({ message: "", completed: false });
      toast.error("Please add todo");
    }
  };

  const [todos, setTodos] = useState(null);
  //getting the current todos

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"));
    setTodos(todos);
  }, [key]);
  return (
    <MyContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        todos,
        setTodos,
        onHandleChange,
        handleSubmit,
        todo,
        setKey,
      }}
    >
      <div className="app d-flex flex-column justify-content-between">
        <div>
          <Home />;
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
