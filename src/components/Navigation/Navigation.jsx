import { LinkStyled } from "./Navigation.styles";
import { Button } from '../Button/Button'

export const Navigation = ({ onClick, name }) => {
    return (
        <nav>
            <LinkStyled to='/'>
                <Button name="Головна"></Button>
            </LinkStyled>
            <LinkStyled to='/dictionary'>
                <Button name="Словник"></Button>
            </LinkStyled>
            <LinkStyled to='/selected-words'>
                <Button name="Вибрані слова"></Button>
            </LinkStyled>
            <LinkStyled to='/learned-words'>
                <Button name="Вивчені слова"></Button>
            </LinkStyled>
            <Button onClick={onClick} name={name} />
        </nav>
    )
};