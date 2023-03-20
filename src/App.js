import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"
import { HomeElk } from "./components/HomeElk"
import { HomeWysokie } from "./components/HomeWysokie"
import { HomeLomza } from "./components/HomeLomza";

function App() {
  return (
      <Router>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/' element={<Home />}>
          </Route>

            <Route path='/elk' element={<HomeElk />}></Route>
            <Route path='/wysokie-mazowieckie' element={<HomeWysokie />}></Route>
            <Route path='/lomza' element={<HomeLomza />}></Route>
        </Routes>
      </Router>
  )
}

export default App