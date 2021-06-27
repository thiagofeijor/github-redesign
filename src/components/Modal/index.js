import React, { useRef, useEffect } from 'react'
import { AnimatedCard } from './components'

export default ({ children, onClose }) => {
  const modalElm = useRef(null)

  useEffect(() => {
    const closeUnsave = ({ target }) => {
      if (!modalElm?.current?.contains || !target) return
      if (!modalElm.current.contains(target)) onClose()
    }

    document.addEventListener('click', closeUnsave)
    return () => document.removeEventListener('click', closeUnsave)
  }, [])

  return <AnimatedCard ref={modalElm}>{children}</AnimatedCard>
}
