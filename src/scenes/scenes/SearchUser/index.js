import React from 'react'
import { useHistory } from 'react-router-dom'
import AsyncSelect from 'react-select/async'
import requests from 'services/requests'
import { debounce } from 'services/functions'
import { ContentSelect } from './components'

export default ({}) => {
  const history = useHistory()

  const onNavigateToUser = ({ value }) => {
    history.push(`/repositories/${value}`)
  }

  const fetchOptions = async (inputValue, callback) => {
    if (!inputValue) return callback([])

    const data = await requests.getUsers(inputValue)
    const options = (data.items || [])
      .map(({ login }) => ({
        label: login,
        value: login,
      }))

    callback(options)
  }

  const loadOptions = debounce(fetchOptions, 800)

  return (
    <ContentSelect>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        onChange={onNavigateToUser}
      />
    </ContentSelect>
  )
}
