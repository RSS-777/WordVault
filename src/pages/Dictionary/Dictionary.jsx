import { useState, useEffect } from 'react';
import { ContainerStyle, BlockWordsStyle } from '../../styles/components';
import { NavigationBarWords } from '../../components/NavigationBarWords/NavigationBarWords';
import { groupedWords } from '../../utils/translationsWords';

const Dictionary = () => {
    const [translateWords, setTranslateWords] = useState({});
    const [showButton, setShowButton] = useState(false);
    const [selectedWords, setSelectedWords] = useState({});
    const [clickOption, setClickOption] = useState({});

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
        const learnKeys = Object.keys(learnedWords);
        const filteredGroupedWords = Object.fromEntries(
            Object.entries(groupedWords).map(([key, value]) => {
                return [key, value.filter(word => {
                    return !learnKeys.includes(key) || !learnedWords[key].some(learnWord => Object.keys(learnWord)[0] === Object.keys(word)[0]);
                })];
            })
        );
        const updatedFilteredGroupedWords = Object.fromEntries(
            Object.entries(filteredGroupedWords).filter(([key, value]) => value.length > 0)
        );

        setTranslateWords(updatedFilteredGroupedWords);

        const storedSelectedWords = JSON.parse(localStorage.getItem('selectedWords') || '{}');
        setSelectedWords(storedSelectedWords);
    }, []);

    const handleOption = (items) => {
        setClickOption(items)
    }

    const handleSetSelectedWords = (firstLetter, obj, event) => {
        event.stopPropagation();
        setClickOption(null)
        const selectedWordsStorage = JSON.parse(localStorage.getItem('selectedWords') || '{}');

        if (!selectedWordsStorage[firstLetter]) {
            selectedWordsStorage[firstLetter] = [];
        }
        if (!selectedWordsStorage[firstLetter].some(item => JSON.stringify(item) === JSON.stringify(obj))) {
            selectedWordsStorage[firstLetter].push(obj);
        }
        localStorage.setItem('selectedWords', JSON.stringify(selectedWordsStorage))
        setSelectedWords(selectedWordsStorage);
    };

    const handleSetLernedWords = (firstLetter, obj, event) => {
        event.stopPropagation();
        setClickOption(null)
        let learnedWordsStorage = JSON.parse(localStorage.getItem('learnedWords') || '{}');

        if (!learnedWordsStorage[firstLetter]) {
            learnedWordsStorage[firstLetter] = [];
        }
        if (!learnedWordsStorage[firstLetter].some(item => JSON.stringify(item) === JSON.stringify(obj))) {
            learnedWordsStorage[firstLetter].push(obj);
            localStorage.setItem('learnedWords', JSON.stringify(learnedWordsStorage));

            setTranslateWords(prevTranslateWords => {
                const updatedTranslateWords = {
                    ...prevTranslateWords,
                    [firstLetter]: prevTranslateWords[firstLetter].filter(word => JSON.stringify(word) !== JSON.stringify(obj))
                };
                if (updatedTranslateWords[firstLetter].length === 0) {
                    delete updatedTranslateWords[firstLetter];
                }

                return updatedTranslateWords;
            });
        }
    };

    return (
        <ContainerStyle $showButton={showButton}>
            <a href="#start">На початок</a>
            {Object.keys(translateWords).length > 0 &&
                <span>Кількість: <span>{Object.values(translateWords).reduce((acc, words) => { acc += words.length; return acc }, 0)}</span></span>
            }
            {Object.keys(translateWords).map((firsLetter, index) => (
                <div key={`${firsLetter} + ${index}`}>
                    <span id='start'></span>
                    <h4 id={firsLetter}>{firsLetter}</h4>
                    <BlockWordsStyle>
                        {translateWords[firsLetter].map((items, i) => (
                            <li
                                key={`${items} + ${i}`}
                                onClick={() => handleOption(items)}
                                className={selectedWords[firsLetter] && selectedWords[firsLetter].some(item => JSON.stringify(item) === JSON.stringify(items)) ? 'selected-item' : ''}
                            >
                                <span>{Object.keys(items)}</span><span> : </span><span>{Object.values(items)}</span>
                                {clickOption === items &&
                                    <div>
                                        Додати до:
                                        <button onClick={(e) => handleSetSelectedWords(firsLetter, items, e)}>вибрані</button>
                                        <button onClick={(e) => handleSetLernedWords(firsLetter, items, e)}>вивчені</button>
                                    </div>
                                }
                            </li>
                        ))}
                    </BlockWordsStyle>
                </div>
            ))}
            < NavigationBarWords translateWords={translateWords} />
        </ContainerStyle>
    )
};

export default Dictionary;

