import { ContainerStyle, BlockWordsStyle } from './Dictionary.styles';
import { translations } from '../../utils/translationsWords';
import { NavigationBarWords } from '../../components/NavigationBarWords/NavigationBarWords';

let groupedWords = translations.reduce((acc, items) => {
    const firstWord = Object.keys(items)[0][0].toUpperCase();
    if (!acc[firstWord]) {
        acc[firstWord] = []
    }
    acc[firstWord].push(items)
    return acc
}, {});

const Dictionary = () => {
    return (
        <ContainerStyle>
            {Object.keys(groupedWords).map((firsLetter, index) => (
                <div key={`${firsLetter} + ${index}`}>
                    <h4 id={firsLetter}>{firsLetter}</h4>
                    <BlockWordsStyle>
                        {groupedWords[firsLetter].map((items, index) => (
                            <li key={`${items} + ${index}`}><span>{Object.keys(items)}</span>: <span>{Object.values(items)}</span></li>
                        ))}
                    </BlockWordsStyle>
                </div>
            ))}
        < NavigationBarWords />
        </ContainerStyle>
    )
};

export default Dictionary;

