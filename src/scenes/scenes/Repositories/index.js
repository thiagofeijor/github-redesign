import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Table } from 'components'
import requests from 'services/requests'
import { arrayColumn } from 'services/requests'
import { useTranslate } from 'services/translate'

export default ({}) => {
  const { user_name } = useParams()
  const translate = useTranslate()

  const [isLoading, setIsLoading] = useState(true)
  const [dataTable, setDataTable] = useState([])

  const loadAsyncData = data => {
    const cachedTags = localStorage.getItem('tags')

    Promise
      .all(data.map(
        async repo => {
          const { name, id } = repo
          const languages = await requests.getLanguages(user_name, name)
          const tags = cachedTags?.[id]
          const langs = Object.keys(languages)
          return { ...repo, langs, tags }
        }
      ))
      .then(delta => setDataTable(delta))
  }

  useEffect(() => {
    if (!user_name) return

    requests.getRepositories(user_name)
      .then(response => {
        setDataTable(response)
        setIsLoading(false)
        loadAsyncData(response)
      })
      .catch(err => {
        console.log(JSON.stringify(err))
      })
  }, [user_name])

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <Table
      columns={[
        { key: 'name', width: '20%', label: translate('Repositório') },
        { key: 'description', label: translate('Descrição') },
        { 
          key: 'language',
          label: translate('Linguagem'),
          width: '10%',
          render: ({ langs }) => (langs || []).join(', '),
        },
        { 
          key: 'tags',
          label: translate('Tags'),
          width: '10%',
          render: ({ tags }) => (tags || []).join(', '),
        }
      ]}
      dataTable={dataTable}
    />
  )
}
