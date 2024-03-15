import styled from "styled-components";

export const ContainerHomeStyle = styled.div`
  border: 2px solid #FF9D00;
  border-radius: 20px;
  margin: 40px 10px;
  padding: 20px;
  background-color: ${props => props.theme.background};
  box-shadow: 2px 2px 8px 1px #000;
  user-select: none;
  color: ${props => props.theme.text};

  h2 {
    text-align: center;
    color: ${props => props.theme.primary};
  }

  p {
    b {
        color: ${props => props.theme.primary};
    }

    i {
        color: red;
    }
  }
`;