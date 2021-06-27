import React, { useState, useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import debounce from 'lodash/debounce'
import { Table, Overlay, Loading } from 'components'
import { getRepositories } from 'services/requests'
import { useTranslate } from 'services/translate'
import { SelectTag } from 'scenes/components'
import { EditRepoTag, ColumnEdit, Container } from './components'

export default ({}) => {
  const { user_name } = useParams()
  const translate = useTranslate()

  const [isLoading, setIsLoading] = useState(true)
  const [staredRepos, setStaredRepos] = useState([])
  const [dataTable, setDataTable] = useState([])
  const [editing, setEditing] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const setFilter = debounce(query => setInputValue(query), 500)
  const fnTagReducer = (store, event) => {
    const data = { ...store, ...event }
    localStorage.setItem('tags', JSON.stringify(data))
    setEditing(null)
    return data
  }
  const getTag = () => {
    const tag = localStorage.getItem('tags')
    return tag ? JSON.parse(tag) : {}
  }

  const [tag, setTag] = useReducer(fnTagReducer, getTag())

  useEffect(() => {
    if (!user_name) return

    getRepositories(user_name)
      .then(response => {
        setStaredRepos(response)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(JSON.stringify(err))
      })
  }, [user_name])

  useEffect(() => {
    if (inputValue) {
      const repoList = staredRepos.filter(repo => {
        if (!tag[repo.id]) return false

        return tag[repo.id]
          .filter(t => t.includes(inputValue))
          .length
      })
      setDataTable(repoList)
      return
    }
    setDataTable(staredRepos)
  }, [staredRepos, tag, inputValue])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Container height="10vh">
        <SelectTag
          tags={tag}
          onChange={e => setFilter(e?.target?.value)}
        />
      </Container>
      <Container height="90vh">
        <Table
          columns={[
            { key: 'name', label: translate('Repositório') },
            { key: 'description', label: translate('Descrição') },
            {
              key: 'language',
              label: translate('Linguagem'),
            },
            {
              key: 'tags',
              label: translate('Tags'),
              render: ({ id }) => (tag[id.toString()] || []).join(', '),
            },
            {
              key: 'edit',
              label: '',
              width: '80px',
              render: entry => (
                <ColumnEdit onClick={() => setEditing(entry)}>
                  {translate('Editar')}
                </ColumnEdit>
              ),
            },
          ]}
          dataTable={dataTable}
        />
      </Container>
      {editing && (
        <Overlay>
          <EditRepoTag
            id={editing?.id}
            value={tag}
            onCancel={() => setEditing(null)}
            onSuccess={setTag}
          />
        </Overlay>
      )}
    </>
  )
}
