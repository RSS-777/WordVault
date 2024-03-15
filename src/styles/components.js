import styled from 'styled-components';

export const ContainerStyle = styled.div`
  color: ${props => props.theme.text};
  position: relative;

  >a {
    display: ${props => props.$showButton ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-decoration: none;
    line-height: 20px;
    padding: 0 10px;
    color: #F50303;
    border: 1px solid red;
    border-top: none;
    border-radius: 0 0 8px 8px;
    box-shadow: ${props => props.theme.boxShadowButton};
    background-color: #38454C;
  
    &:hover {
     color: white;
     border-top: none;
    }
  }

  >span {
    position: absolute;
    right: 20px;
    color: ${props => props.theme.primary};

    >span {
      color: ${props => props.theme.text};
    }
  }
  
  div {
    
    h4 {
      color: ${props => props.theme.primary};
      margin: 5px auto 5px 50px;
    }

    >span {
      position: absolute;
      top: 0;
    }
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
  user-select: none;

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
      margin-left: 2px;
    }

    span:nth-child(2) {
      color: ${props => props.theme.primary};
    }

    span:nth-child(3) {
      color: ${props => props.theme.secondary};
    }

    >div {
      font-size: 12px;
      color: ${props => props.theme.text};
      padding-left: 8px;

      button {
        font-size: 12px;
        background-color: ${props => props.theme.backgroundButton};
        box-shadow: ${props => props.theme.boxShadowButton};
        border: 1px solid red;
        border-radius: 8px;
        color: ${props => props.theme.text};
        margin-left: 5px;
        margin-bottom: 5px;

        &:hover {
          box-shadow: none;
          border: 1px solid white;
         }
      }
    }

    &:hover {
      border: 1px solid red;
      box-shadow: ${props => props.theme.boxShadowButton};
    }

    &:active {
      background-color: #FFD9E1;
    }
  }

  .selected-item {
    border: 1px solid #FF9D00;
    background-color:  ${props => props.theme.inactiveBackground};
    cursor: not-allowed;
    pointer-events: none;

    span:first-child {
      color: ${props => props.theme.inactiveTextPrimary};
    }

    span:nth-child(2) {
      color: ${props => props.theme.inactiveTextSecondary};
    }

    span:nth-child(3){
      color: ${props => props.theme.inactiveTextThird};
    }
  }
`;

export const MessageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #FF9D00;
  border-radius: 20px;
  margin: 40px 10px;
  height: 20vh;
  background-color: ${props => props.theme.background};
  box-shadow: 2px 2px 8px 1px #000;
  user-select: none;
`;