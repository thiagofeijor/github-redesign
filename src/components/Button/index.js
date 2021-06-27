import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  border: 1px solid blue;
  background-color: blue;
  color: white;
  border-radius: 5px;
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`

export default Button
