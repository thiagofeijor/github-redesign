import styled from 'styled-components'

const Cell = styled.div`
  ${({ width }) => width ? `width: ${width}` : 'flex: 1'};
  overflow-x: hidden;
  overflow-y: overlay;
  display: flex;
  word-break: break-word;
  :first-child {
    padding-left: 8px;
  }
  :last-child {
    padding-right: 25px;
  }
`

export default Cell
