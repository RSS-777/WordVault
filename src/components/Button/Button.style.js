import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: ${props => props.theme.backgroundButton};
  line-height: 20px;
  padding: 0 5px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.boxShadowButton};
  border: 1px solid red;
  color: ${props => props.theme.text};

  &:hover {
   box-shadow: none;
   border: 1px solid white;
  }

  @media (max-width: 480px) {
    padding: 0 3px;
    font-size: 10px;
  }
`;