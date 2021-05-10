import styled from 'styled-components'

const Table = styled.div`
  height: ${({ height }) => height || '100%'};
  display: flex;
  flex-direction: column;
  overflowX: hidden;
  border-style: none;
  border-width: none;
  border-color: none;
`

export default Table
