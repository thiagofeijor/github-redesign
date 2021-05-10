import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GlobalStyles from './styles'
import { SearchUser, Repositories } from './scenes'

export default ({}) => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path="/repositories/:user_name">
          <Repositories />
        </Route>
        <Route path="/">
          <SearchUser />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
