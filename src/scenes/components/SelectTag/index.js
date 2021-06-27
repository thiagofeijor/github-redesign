import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Input } from 'components'

const SelectTag = ({
  id,
  tags,
  value,
  onChange,
  onEnter,
}) => {
  const repoTags = tags?.[id] || []

  const tagList = useMemo(() => {
    const setList = Object.entries(tags || {})
      .reduce((memo, [_, value]) => ([
        ...memo, 
        ...value,
      ]), [])
      .filter(tag => !repoTags.includes(tag))

    return Array.from(new Set(setList))
  }, [tags, id, value])

  return (
    <>
      <Input
        list={`tags${id || ''}`}
        value={value}
        onChange={onChange}
        onEnter={onEnter}
      />
      <datalist id={`tags${id || ''}`}>
        {tagList.map((value, index) => (
          <option value={value} key={index} />
        ))}
      </datalist>
    </>
  )
}

SelectTag.propTypes = {
  tags: PropTypes.objectOf(PropTypes.array)
}

export default SelectTag
