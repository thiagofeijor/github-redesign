import styled, { keyframes } from 'styled-components'

const show = keyframes`
  0% {
    transform: translateY(10px);
    opacity:0;
  }
  100% {
    transform: translateY(0px);
    opacity:1;
  }
`

const Card = styled.div`
  width: 60vw;
  padding: 25px 15px;
  background-color: white;
  animation: ${show} ease 600ms;
`

export default Card
