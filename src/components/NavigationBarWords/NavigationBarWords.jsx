import { useState, useEffect } from "react";
import { NavStyle } from "./NavigationBarWords.style";

export const NavigationBarWords = () => {
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
            console.log(event.target)
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.addEventListener('click', handleClickOutside);
        }
    });

    return (
        <NavStyle $open={close}>
            <span onClick={handleClose}>Навігація</span>
            <a href="#A">A</a>
            <a href="#B">B</a>
            <a href="#C">C</a>
            <a href="#D">D</a>
            <a href="#E">E</a>
            <a href="#F">F</a>
            <a href="#G">G</a>
            <a href="#H">H</a>
            <a href="#I">I</a>
            <a href="#J">J</a>
            <a href="#K">K</a>
            <a href="#L">L</a>
            <a href="#M">M</a>
            <a href="#N">N</a>
            <a href="#O">O</a>
            <a href="#P">P</a>
            <a href="#Q">Q</a>
            <a href="#R">R</a>
            <a href="#S">S</a>
            <a href="#T">T</a>
            <a href="#U">U</a>
            <a href="#V">V</a>
            <a href="#W">W</a>
            <a href="#X">X</a>
            <a href="#Y">Y</a>
            <a href="#Z">Z</a>
        </NavStyle>
    )
}
