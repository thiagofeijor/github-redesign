import React, { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import { useHistory } from 'react-router-dom'
import { getUsers } from 'services/requests'
import { useTranslate } from 'services/translate'
import { Input, Button, Content, Logo } from 'components'
import { Container } from './components'

export default ({}) => {
  const history = useHistory()
  const translate = useTranslate()

  const [inputValue, setInputValue] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [dataList, setDataList] = useState([])

  const onNavigateToUser = user_name => {
    history.push(`/repositories/${user_name}`)
  }

  const loadOptions = debounce(({ value }) => setInputValue(value), 500)

  useEffect(() => {
    if (!inputValue) {
      setDataList([])
      return
    }

    setIsLoading(true)
    getUsers(inputValue)
      .then(response => {
        setDataList((response.items || []).map(({ login }) => login))
      })
      .finally(() => setIsLoading(false))
  }, [inputValue])

  return (
    <>
      <Logo />
      <Container>
        <Content>
          <Input
            list="users"
            onChange={({ target }) => loadOptions(target)}
            onEnter={onNavigateToUser}
            isLoading={isLoading}
          />
          <Button
            onClick={() => onNavigateToUser(inputValue)}
            disabled={!inputValue}
          >
            {translate('Buscar')}
          </Button>
        </Content>
      </Container>
      <datalist id="users" data-testid="list-users">
        {dataList.map((value, index) => (
          <option value={value} key={index} />
        ))}
      </datalist>
    </>
  )
}
