import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: ${props => props.$open ? '0' : '-25px'};
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  min-height: 140px;
  padding: 5px 0 3px;
  border: 2px solid red;
  border-radius: 0 10px 10px 0;
  background-color: ${props => props.theme.backgroundWords};
  box-shadow: ${props => props.theme.boxShadowButton};
  transition: left 0.4s linear;

  span {
    position: absolute;
    left:-15px;
    transform: rotateZ(-90deg);
    color: red;
    background-color: #38454C;
    padding: 0 10px;
    border-radius: 0 0 8px 8px;
    border: 2px solid #FF9D00;
    box-shadow: ${props => props.theme.boxShadowButton};
    cursor: pointer;
    
    &:hover {
        text-shadow: 0 0 2px white;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};

    &:hover {
        color: red;
      }
  }
`;