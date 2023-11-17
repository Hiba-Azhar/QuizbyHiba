import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Welcome from './Welcome'
import { AboutHeader, AboutContent, Navbar } from './About'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path='/about'>
            <AboutHeader />
            <AboutContent />
          </Route>
          <Route path='/welcome/:name' component={Welcome} />
          <Route path='/welcome' component={Welcome} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
