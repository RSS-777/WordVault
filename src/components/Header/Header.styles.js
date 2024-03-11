import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  box-shadow: 0 0 5px 1px black;
  height: 72px;
  border: 2px solid #FF9D00;
  border-top: 2px solid transparent;
  border-radius: 0 0 40px 40px;
  text-align: center;
  margin-bottom: 10px;

  h1 {
    font-family: 'Great Vibes', cursive; 
    font-size: 28px;
    color: red;
    margin-bottom: 0;
    margin-top: 5px;
  }

  @media (max-width: 480px) {
    height: 63px;
    border-radius: 0 0 20px 20px;

    h1 {
      font-size: 22px;
    }
  }
`;