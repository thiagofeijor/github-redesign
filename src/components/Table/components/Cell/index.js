import styled from 'styled-components'

const Cell = styled.div`
  ${({ width }) => width ? `width: ${width}` : 'flex: 1'};
  overflow-x: hidden;
  overflow-y: overlay;
  display: flex;
`

export default Cell
