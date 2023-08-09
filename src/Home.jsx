import React, { useContext } from "react";
import Tab from "./components/Tab";
import { MyContext } from "./context";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const { currentTab } = useContext(MyContext);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer /> <Tab />
      {currentTab.addtodo ? <AddTodo /> : <ShowTodo />}
    </>
  );
};

export default Home;
