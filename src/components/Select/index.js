import React from 'react'
import { Container, Input } from './components'

export default ({ ref, onChange, onSearch }) => {

  const onKeyPress = ({ key, target }) => {
    if (key === 'Enter') {
      onSearch(target.value)
    }
  }

  return (
    <Container>
      <Input
        ref={ref}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </Container>
  )
}
