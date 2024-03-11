import { HeaderStyle } from "./Header.styles";
import { Navigation } from "../Navigation/Navigation";

export const Header = ({ toggleTheme, theme }) => {
    const timeOfDay = (theme === 'light') ? '☀️' : '🌙';

    return (
        <HeaderStyle>
            <h1>Word vault</h1>
            <Navigation onClick={toggleTheme} name={timeOfDay} />
        </HeaderStyle>
    )
}