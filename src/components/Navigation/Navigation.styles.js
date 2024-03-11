import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(NavLink)`
position: relative;
  margin-right: 10px;

  &.active:before {
    content: '';
    height: 1.5px; 
    width: 85%; 
    position: absolute; 
    left: 50%;
    transform: translateX(-50%);
    bottom: -9px; 
    background-color: red; 
  }

  @media (max-width: 480px) {
    margin-right: 5px;
  }
`;