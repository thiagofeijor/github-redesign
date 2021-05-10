import React from 'react'

export const translateCtx = React.createContext()

export const useTranslate = () => React.useContext(translateCtx)
