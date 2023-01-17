import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Blog from "./Blog";
import '../styles/App.css'

function App() {
  return (
    <Router>
      <Blog />
    </Router>
  );
}

export default App;