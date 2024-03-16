import styled from "styled-components";

export const ContainerFooterStyle = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.background};
  margin-top: 15px;
  padding: 0 20px;
  height: 45px;
  border: 2px solid #FF9D00;
  border-bottom: 2px solid transparent;
  border-radius: 30px 30px 0 0;
  box-shadow: 0 0 5px 1px black;

  div:first-child {
    a {
      position: relative;
      color: ${props => props.theme.text};
       text-decoration: none;
       margin-right: 5px;

       &:hover:before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -5px;
        width: 80%;
        height: 2px;
        border-bottom: 2px solid red;
       }
    }
  }

  div:first-child {
    .active {
      color: red;
    }
  }

  div:last-child {
    span {
      font-size: 14px;
      color: ${props => props.theme.text};
      text-shadow: 0 0 3px red;
      user-select: none;
    }
  }

  @media (max-width: 410px) {
    padding: 0 10px;
    border-radius: 20px 20px 0 0;
  }
`;