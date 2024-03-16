import { NavLink } from "react-router-dom";
import { ContainerFooterStyle } from "./Footer.style";

export const Footer = () => {
    return (
        <ContainerFooterStyle>
            <div>
                <NavLink to={'./contact'}>Контакти</NavLink>
                <NavLink to={'./about'}>Про_нас</NavLink>
            </div>
            <div>
                <span>&copy; 2024 RSS_Private</span>
            </div>
        </ContainerFooterStyle>
    )
}