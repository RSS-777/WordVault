import { ButtonStyled } from "./Button.style";

export const Button = ({name, onClick}) => {
    return (
        <ButtonStyled onClick={onClick}>{name}</ButtonStyled>
    )
}