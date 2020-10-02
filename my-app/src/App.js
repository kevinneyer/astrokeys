import React from 'react'
import './App.css';
import About from './components/About'
import Music from './components/Music'
import Gigs from './components/Gigs'
import Contact from './components/Contact'
import Home from './components/Home'
import NavBar from '../src/NavBar'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Grid, GridColumn} from 'semantic-ui-react'

function App() {
  return(
    <div className='app'>
      <NavBar />
 
      <Router>
        <Switch>
         
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/music' component={Music} />
          <Route exact path='/gigs' component={Gigs} />
          <Route exact path='/contact' component={Contact} />
  
        </Switch>
      </Router>
      < Footer />
    
    </div>
  )
}

export default App
