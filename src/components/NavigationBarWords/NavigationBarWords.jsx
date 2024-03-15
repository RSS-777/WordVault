import { useState, useEffect } from "react";
import { NavStyle } from "./NavigationBarWords.style";

export const NavigationBarWords = ({ translateWords }) => {
    const [close, setClose] = useState(false);

    const handleClose = () => {
        setClose((prev) => prev === false ? true : false)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const isNavClicked = event.target.closest('nav');
            if (!isNavClicked) {
                setClose(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.addEventListener('click', handleClickOutside);
        }
    });

    return (
        <NavStyle $open={close}>
            <span onClick={handleClose}>Навігація</span>
            {Object.keys(translateWords).map((item, index) =>
                <a href={`#${item}`} key={index}>{item}</a>
            )}
        </NavStyle>
    )
}
