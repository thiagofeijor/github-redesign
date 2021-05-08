import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import Root from 'scenes'

const ll = { d: { a: { }}}
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
