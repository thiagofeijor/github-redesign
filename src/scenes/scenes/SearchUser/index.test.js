import '@testing-library/jest-dom/extend-expect'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { TranslateProvider } from 'components'
import App from './'

beforeEach(() => {
  render(
    <TranslateProvider>
      <App />
    </TranslateProvider>
  )
})

test('renders input and button', () => {
  const inputElement = screen.getByPlaceholderText('Pesquisar')
  expect(inputElement).toBeInTheDocument()
  
  const buttonElement = screen.getByText('Buscar')
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toBeDisabled()
})

test('renders datalist', () => {
  const datalistElement = screen.getByTestId('list-users')
  expect(datalistElement).toBeInTheDocument()
})

test('enable search after type', async () => {
  fireEvent.change(screen.getByPlaceholderText('Pesquisar'), { target: { value: 'thiagofeijor' } })

  expect(screen.getByPlaceholderText('Pesquisar')).toHaveValue('thiagofeijor')

  await waitFor(() => expect(screen.getByText('Buscar')).not.toBeDisabled(), { timeout: 650 })
})
