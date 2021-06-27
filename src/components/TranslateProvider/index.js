import React, { useMemo } from 'react'
import Polyglot from 'node-polyglot'
import { translateCtx, useLangValue } from 'services/translate'
import { translations } from './translations'

export default ({ children }) => {
  const [ lang ] = useLangValue()

  const translate = useMemo(() => {
    const phrases = translations[lang] || {}
    const polyglot = new Polyglot({ phrases })

    return (text, params) => {
      return polyglot.t(text, {
        _: text,
        ...params,
      })
    }
  }, [lang])

  return (
    <translateCtx.Provider value={translate}>
      {children}
    </translateCtx.Provider>
  )
}
