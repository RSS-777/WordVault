import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './styles/theme';
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import LearnedWords from './pages/LearnedWords/LearnedWords';
import Dictionary from './pages/Dictionary/Dictionary';
import SelectedWords from './pages/SelectedWords/SelectedWords';
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { Routes, Route } from "react-router-dom";
import { MainStyle } from "./App.style";

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const currentTheme = (theme === 'light') ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <MainStyle>
        <div>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/selected-words" element={<SelectedWords />} />
            <Route path="/learned-words" element={<LearnedWords />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </MainStyle>
    </ThemeProvider>
  )
}

export default App
