import React, { useState, useEffect } from 'react'
import { Button, Modal, Content } from 'components'
import { useTranslate } from 'services/translate'
import { SelectTag } from 'scenes/components'
import { List, Item } from './components'

export default ({ id, value, onSuccess, onCancel }) => {
  const translate = useTranslate()
  const [inputValue, setInputValue] = useState('')
  const [repoTags, setRepoTags] = useState(value?.[id] || [])

  const onInclude = () => {
    if (!inputValue || repoTags.includes(inputValue)) return
    setRepoTags([ ...repoTags, inputValue ])
    setInputValue('')
  }

  const onRemove = tag => {
    setTimeout(() => {
      setRepoTags(repoTags.filter(repTag => repTag !== tag))
    })
  }

  useEffect(() => {
    const closeOnESC = ({ keyCode }) => keyCode === 27 && onCancel()
    document.addEventListener('keydown', closeOnESC);
    return () => document.removeEventListener('keydown', closeOnESC)
  }, [])

  return (
    <Modal onClose={onCancel}>
      <Content>
        <SelectTag
          id={id}
          tags={value}
          value={inputValue}
          onChange={e => setInputValue(e?.target?.value)}
          onEnter={onInclude}
        />
        <Button
          onClick={onInclude}
        >
          {translate('Adicionar')}
        </Button>
      </Content>
      <List>
        {repoTags.map(tag => (
          <Item
            key={tag}
            onClick={() => onRemove(tag)}
          >
            {tag}
          </Item>
        ))}
      </List>
      <Button
        onClick={() => onSuccess({ [id]: repoTags })}
      >
        {translate('Salvar')}
      </Button>
    </Modal>
  )
}
