import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  ${({ isLoading }) => isLoading && `
    cursor: progress;
  `}
`

export default Input
