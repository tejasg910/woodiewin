import React, { useContext } from "react";
import { MyContext } from "../context";

const Tab = () => {
  const { currentTab, setCurrentTab } = useContext(MyContext);
  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            onClick={() => {
              setCurrentTab({ addtodo: true, showtodo: false });
            }}
            className={`nav-link ${currentTab.addtodo ? "active" : ""}`}
            aria-current="page"
            href="#"
          >
            Add Todo
          </a>
        </li>
        <li className="nav-item">
          <a
            onClick={() => {
              setCurrentTab({ addtodo: false, showtodo: true });
            }}
            className={`nav-link ${currentTab.showtodo ? "active" : ""}`}
            href="#"
          >
            Show Todos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Tab;
