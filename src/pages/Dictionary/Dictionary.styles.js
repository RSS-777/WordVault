import styled from "styled-components";

export const ContainerStyle = styled.div`
  color: ${props => props.theme.text};

  h4 {
    color: ${props => props.theme.primary};
    margin: 5px auto 5px 50px;
  }
`;

export const BlockWordsStyle = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border: 2px solid #FF9D00;
  padding: 10px 15px;
  margin: 10px;
  background-color: ${props => props.theme.background};
  border-radius: 20px;
  box-shadow: 2px 2px 8px 1px #000;

  li {
    border: 1px solid #FF9D00;
    background-color: ${props => props.theme.backgroundWords};
    width: 200px;
    cursor: pointer;
    border-radius: 10px;
    padding: 1px 5px;
    margin: 5px 15px;

    span:first-child {
      color: ${props => props.theme.primary};
    }

    span:last-child {
      color: ${props => props.theme.secondary};
    }

    &:hover {
      border: 1px solid red;
      box-shadow: ${props => props.theme.boxShadowButton};
    }
  }
`;