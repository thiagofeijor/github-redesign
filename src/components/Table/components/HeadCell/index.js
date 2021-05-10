import styled from 'styled-components'

const HeadCell = styled.div`
  ${({ width }) => width ? `width: ${width}` : 'flex: 1'};
  justify-content: space-between;
  display: flex;
  font-style: normal;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`

export default HeadCell
