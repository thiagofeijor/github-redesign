import React from 'react'
import ReactDOM from 'react-dom'
import { TranslateProvider } from 'components'
import Root from 'scenes'

ReactDOM.render(
  <React.StrictMode>
    <TranslateProvider>
      <Root />
    </TranslateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
