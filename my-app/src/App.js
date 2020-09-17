import React from 'react'
// import './App.css';
import About from './components/About'
import Music from './components/Music'
import Gigs from './components/Gigs'
import Contact from './components/Contact'
import Home from './components/Home'
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {
  return(
    <div>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/gigs' component={Gigs} />
        <Route exact path='/contact' component={Contact} />
      </Router>
    </div>
  )
}

export default App
