import React from "react"

import Navbar from "./Navbar"
import Form  from "./Form.js"


function App() {
    return(
      <div className = "main-view">
        <Navbar />
        <Form />
      </div>
    )
  }



export default App;


// Constructor method initializes a class component
// super() method ships properties and methods from the super parent class(React.Component)