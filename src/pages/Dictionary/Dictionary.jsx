import { useState, useEffect } from 'react';
import { ContainerStyle, BlockWordsStyle } from '../../styles/components';
import { NavigationBarWords } from '../../components/NavigationBarWords/NavigationBarWords';
import { groupedWords } from '../../utils/translationsWords';

const Dictionary = () => {
    const [translateWords, setTranslateWords] = useState({});
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const learnedWords = JSON.parse(localStorage.getItem('learnedWords') || '{}');
        //відфільтрувати з learnedWords!!!
        setTranslateWords(groupedWords);
    }, []);

    const handleSetLocalStorage = (firstLetter, obj) => {
        const updateLocalWords = JSON.parse(localStorage.getItem('selectedWords') || '{}');

        if (!updateLocalWords[firstLetter]) {
            updateLocalWords[firstLetter] = [];
        }

        if (!updateLocalWords[firstLetter].some(item => JSON.stringify(item) === JSON.stringify(obj))) {
            updateLocalWords[firstLetter].push(obj);
        }

        localStorage.setItem('selectedWords', JSON.stringify(updateLocalWords))
    };

    return (
        <ContainerStyle $showButton={showButton}>
            <a href="#start">На початок</a>
            {Object.keys(translateWords).map((firsLetter, index) => (
                <div key={`${firsLetter} + ${index}`}>
                    <span id='start'></span>
                    <h4 id={firsLetter}>{firsLetter}</h4>
                    <BlockWordsStyle>
                        {translateWords[firsLetter].map((items, index) => (
                            <li
                                key={`${items} + ${index}`}
                                onClick={() => handleSetLocalStorage(firsLetter, items)}
                            ><span>{Object.keys(items)}</span>: <span>{Object.values(items)}</span></li>
                        ))}
                    </BlockWordsStyle>
                </div>
            ))}
            < NavigationBarWords />
        </ContainerStyle>
    )
};

export default Dictionary;

