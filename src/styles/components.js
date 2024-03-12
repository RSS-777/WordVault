import styled from 'styled-components';

export const ContainerStyle = styled.div`
  color: ${props => props.theme.text};

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