import React from 'react'
import { createGlobalState } from 'react-use'

export const translateCtx = React.createContext()

export const useTranslate = () => React.useContext(translateCtx)

export const useLangValue = createGlobalState('pt-BR')
