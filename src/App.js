import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from './store';
import { Main } from './layouts/Main';
// import { About, Contact, Portfolio } from './pages';
import './design/scss/app.scss';

const App = () => {
  return (
    <ThemeProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />}>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/portfolio" element={<Portfolio />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/resume" element={<Resume />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
