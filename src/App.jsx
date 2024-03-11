import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/theme';
import { Header } from "./components/Header/Header";
import Home from './pages/Home/Home';
import LearnedWords from './pages/LearnedWords/LearnedWords';
import Dictionary from './pages/Dictionary/Dictionary';
import SelectedWords from './pages/SelectedWords/SelectedWords';
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = (theme === 'light') ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <main>
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/selected-words" element={<SelectedWords />} />
          <Route path="/learned-words" element={<LearnedWords />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}

export default App
