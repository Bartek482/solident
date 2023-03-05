import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
      <Router>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/' element={<Home />}>
          </Route>
        </Routes>
      </Router>
  )
}

export default App;