import React from "react"

import Navbar from "./Navbar"
import TodoItem  from "./TodoItem"
import todosData from "./TodoData";


// Function component
// Returns JSX code

function App() {
  return (
    <div className="todo-list">
      <Navbar />
      <TodoItem />
    </div>
  );
}



export default App;


