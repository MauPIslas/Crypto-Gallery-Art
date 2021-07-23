import styled from 'styled-components'

const NavbarContainer = styled.nav`
width: 100%;
height: 10vh;
font-family: 'Satisfy', cursive;
font-family: 'Kaushan Script', cursive;
display: grid;
background: transparent;


p{
  align-self: center;
  justify-self: center;
  font-size: 38px;
  text-shadow: 3px 3px 5px white;
  transition: all 0.5s cubic-bezier(.09,.93,.38,.99);
  

  :hover{
    cursor: pointer;
    transform: scale3d(1.05,1.05,1.05) translateY(-4px);
    text-shadow: 5px 5px 7px white;
  }
}
`

export {NavbarContainer}