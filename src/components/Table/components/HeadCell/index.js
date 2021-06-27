import styled from 'styled-components'

const HeadCell = styled.div`
  ${({ width }) => width ? `width: ${width}` : 'flex: 1'};
  justify-content: space-between;
  display: flex;
  font-style: normal;
  letter-spacing: 0.15em;
  word-break: break-word;
  text-transform: uppercase;
  :first-child {
    padding-left: 8px;
  }
  :last-child {
    padding-right: 25px;
  }
`

export default HeadCell
