import styled, {keyframes} from "styled-components";

const messageSubmit = keyframes`
    0% {
      background-color: transparent;
      color: transparent;
    }
    50% {
      background-color: black;
      color: white;
    }
    100% {
      background-color: transparent;
      color: transparent;
    }
`;

export const ContainerFormStyle = styled.div`
  background-color: #CBCBCB;
  box-shadow: 2px 2px 8px 1px black;
  border-radius: 15px;
  max-width: 300px;
  overflow: hidden;
  margin: 10px;

  form {
    position: relative;
    padding: 25px 15px 45px;

    button {
        position: absolute;
        right: 15px;
        bottom: 15px;
        padding: 0 5px;
        border-radius: 6px;
        color: blue;
        border: 2px solid blue;
        box-shadow: 2px 2px 5px 1px black;

        &.enabled:hover {
            border: 1px solid red;
            box-shadow: 0 0 3px 0 black;
        }

        &.disabled {
            color: gray;
            border: 2px solid gray;
            cursor: not-allowed;
        }
    }
  }

  @media (max-width: 410px) {
    width: 100%;
    margin: 0;
  }
}
`;

export const BlockTextStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    label {
        color: blue;
        margin-right: 5px;
    }

    input {
        padding: 2px 5px;
        border-radius: 8px;
        max-width: 200px;
        box-shadow: 1px 1px 5px 0 black;
    }

    @media (max-width: 410px) {
        display: flex;
        flex-direction: column;
    
        label {
            align-self: flex-start;
            font-size: 14px; 
            margin-bottom: 5px; 
        }
    
        input {
            width: 100%;
        }
    }
`;

export const BlockMessageStyle = styled.div`
    display: flex;
    flex-direction: column;

    label {
        color: blue;
        margin-top: 5px;
    }

    textarea {
        display: flex;
        align-self: flex-end;
        border-radius: 10px;
        resize: none;
        height: 100px;
        width: 200px;
        padding: 5px;
        margin-top: 10px;
        box-shadow: 1px 1px 5px 0 black;
    }

    @media (max-width: 410px) {
        label {
            margin-top: 0;
            margin-bottom: 5px;
            font-size: 14px;  
        }
    
        textarea {
            align-self: center;
            width: 100%;
            margin: 0 10px;
        }
    }
`;

export const BlockErrorStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 16px;

    p {
        font-size: 10px;
        color: red;
    }

    @media (max-width: 410px) {
        justify-content: center;
    }
`;

export const SubmitMessageStyle = styled.div`
    display: ${props => props.$submitted ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${messageSubmit} 4s ease;
`;