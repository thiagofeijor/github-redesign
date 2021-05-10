import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: ${({ theme }) => theme?.Select?.outerHeight}
`

export default Container
