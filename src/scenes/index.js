import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import GlobalStyles from './styles'
import App from './App'

export default ({}) => {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path="/">
          <App />
        </Route>
        <Route path="/users">
          <p>dd</p>
        </Route>
        <Route path="/about">
          <p>gg</p>
        </Route>
      </Switch>
    </Router>
  )
}
