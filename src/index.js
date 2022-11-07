import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom";

//component
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
      <h1>yes</h1>
    </Router>, 
  document.getElementById("root")
);