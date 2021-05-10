import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  align-items: center;
  :nth-child(odd) {
    background-color: lightgray;
  }
`

export default Row
