import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const styles = {
  'position': 'absolute',
  'height': '100vh',
  'width': '100vw',
  'top': '0',
  'left': '0',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'background-color': 'rgb(0 0 0 / 47%)',
}

export default ({ children }) => {
  const _contentElm = document.createElement('div')
  const [contentElm] = useState(_contentElm)

  Object
    .entries(styles)
    .map(([ key, value ]) => {
      contentElm.style[key] = value
    })

  useEffect(() => {
    document.body.appendChild(contentElm)
    return () => document.body.removeChild(contentElm)
  }, [contentElm])

  return createPortal(children, contentElm)
}
