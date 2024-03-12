import { useEffect, useState } from 'react';
import { ContainerStyle, BlockWordsStyle } from '../../styles/components';
import { NavigationBarWords } from "../../components/NavigationBarWords/NavigationBarWords";

const LearnedWords = () => {
    const [lernedWords, setLernedWords] = useState({});
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
        let getLearnedWords = JSON.parse(localStorage.getItem('learnedWords') || '{}');
        setLernedWords(getLearnedWords)
    }, [])

    const handleDeleteWords = (firstLetter, obj) => {
        let getLearnedWords = JSON.parse(localStorage.getItem('learnedWords') || '{}');

        const filterWords = getLearnedWords[firstLetter].filter(item => JSON.stringify(item) !== JSON.stringify(obj));

        if (filterWords.length === 0) {
            delete getLearnedWords[firstLetter];
        } else {
            getLearnedWords[firstLetter] = filterWords;
        }

        localStorage.setItem('learnedWords', JSON.stringify(getLearnedWords));
        setLernedWords(getLearnedWords)
    };

    return (
        <ContainerStyle $showButton={showButton}>
            <a href="#start">На початок</a>
            {Object.keys(lernedWords).map((firsLetter, index) => (
                <div key={`${firsLetter} + ${index}`}>
                    <span id='start'></span>
                    <h4 id={firsLetter}>{firsLetter}</h4>
                    <BlockWordsStyle>
                        {lernedWords[firsLetter].map((items, index) => (
                            <li
                                key={`${items} + ${index}`}
                                onClick={() => handleDeleteWords(firsLetter, items)}
                            ><span>{Object.keys(items)}</span>: <span>{Object.values(items)}</span></li>
                        ))}
                    </BlockWordsStyle>
                </div>
            ))}
            < NavigationBarWords />
        </ContainerStyle>
    )
}

export default LearnedWords;

