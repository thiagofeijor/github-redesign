import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import Root from 'scenes'
import { translateCtx } from 'services/translate'

const theme = {
  Select: {
    outerHeight: '48px'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <translateCtx.Provider value={v => v}>
      <ThemeProvider theme={theme}>
        <Root />
      </ThemeProvider>
    </translateCtx.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
