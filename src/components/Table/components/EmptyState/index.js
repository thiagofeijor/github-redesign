import React from 'react'
import styled from 'styled-components'
import { useTranslate } from 'services/translate'

const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
`

export default ({}) => {
  const translate = useTranslate()

  return (
    <Content>{translate('Nenhum resultado')}</Content>
  )
}
