import { useEffect, useState } from 'react';
import { ContainerStyle, BlockWordsStyle, MessageStyle } from '../../styles/components';
import { NavigationBarWords } from "../../components/NavigationBarWords/NavigationBarWords";

const SelectedWords = () => {
    const [selectedWords, setSelectedWords] = useState({});
    const [showButton, setShowButton] = useState(false);
    const [loading, setLoading] = useState(false)

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
        let getSelectedWords = JSON.parse(localStorage.getItem('selectedWords') || '{}');
        setSelectedWords(getSelectedWords)
        setLoading(true)
    }, [])

    const handleSetLocalStorage = (firstLetter, obj) => {
        let learnedWords = JSON.parse(localStorage.getItem('learnedWords') || '{}');

        if (!learnedWords[firstLetter]) {
            learnedWords[firstLetter] = [];
        }

        if (!learnedWords[firstLetter].some(item => JSON.stringify(item) === JSON.stringify(obj))) {
            learnedWords[firstLetter].push(obj);
        }

        localStorage.setItem('learnedWords', JSON.stringify(learnedWords))
        handleDeleteLocalStorage(firstLetter, obj)
    };

    const handleDeleteLocalStorage = (firstLetter, obj) => {
        let getSelectedWords = JSON.parse(localStorage.getItem('selectedWords') || '{}');
        const filterWords = getSelectedWords[firstLetter].filter(item => JSON.stringify(item) !== JSON.stringify(obj));

        if (filterWords.length === 0) {
            delete getSelectedWords[firstLetter];
        } else {
            getSelectedWords[firstLetter] = filterWords;
        }

        localStorage.setItem('selectedWords', JSON.stringify(getSelectedWords));
        setSelectedWords(getSelectedWords)
    };

    const sortSelectedWords = Object.fromEntries(Object.entries(selectedWords).sort());

    return (
        <ContainerStyle $showButton={showButton}>
            <a href="#start">На початок</a>
            {Object.keys(sortSelectedWords).length > 0 &&
                <span>Кількість: <span>{Object.values(sortSelectedWords).reduce((acc, words) => { acc += words.length; return acc }, 0)}</span></span>
            }
            {Object.keys(sortSelectedWords).map((firsLetter, index) => (
                <div key={`${firsLetter} + ${index}`}>
                    <span id='start'></span>
                    <h4 id={firsLetter}>{firsLetter}</h4>
                    <BlockWordsStyle>
                        {sortSelectedWords[firsLetter].map((items, index) => (
                            <li
                                key={`${items} + ${index}`}
                                onClick={() => handleSetLocalStorage(firsLetter, items)}
                            ><span>{Object.keys(items)}</span><span>:</span><span>{Object.values(items)}</span></li>
                        ))}
                    </BlockWordsStyle>
                </div>
            ))}
            < NavigationBarWords translateWords={sortSelectedWords} />
            {loading && Object.keys(sortSelectedWords).length === 0 && <MessageStyle>Поки ви не добавили жодного слова!</MessageStyle>}
        </ContainerStyle>
    )
}

export default SelectedWords;