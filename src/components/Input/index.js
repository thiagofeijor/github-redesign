import React, { useRef } from 'react'
import { useTranslate } from 'services/translate'
import { Form, Input } from './components'

export default ({
  onEnter,
  onChange,
  isLoading,
  ...props
}) => {
  const translate = useTranslate()
  const inputEl = useRef(null)
  const onSubmit = e => {
    e.preventDefault()
    onEnter(inputEl?.current?.value)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Input
        {...props}
        ref={inputEl}
        placeholder={translate('Pesquisar')}
        onChange={onChange}
        isLoading={isLoading}
      />
    </Form>
  )
}
