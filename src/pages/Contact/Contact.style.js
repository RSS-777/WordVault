import styled from "styled-components";

export const DivStyle = styled.div`
    padding: 15px;
    border-radius: 15px;

    >p:first-child {
        color: ${props => props.theme.text};

        >span {
            line-height: 30px;
            color: ${props => props.theme.primary};

            >span {
                color: ${props => props.theme.secondary}; 
                user-select: text;
            }
        }
    }

    >p:last-child {
        color: red;
    }

    @media (max-width: 410px) {
        padding: 0;
        
        >p:first-child {
            font-size: 14px;

            span {
                font-size: 14px;
            }
        }

        >p:last-child {
            font-size: 14px;
        }
    }
`;