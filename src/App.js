import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StoreProvider, ThemeProvider } from './store';
import { Main } from './layouts/Main';
// import { About, Contact, Portfolio } from './pages';
import './design/scss/app.scss';

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <NavTabs />
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/portfolio" component={Portfolio} />
    //     <Route exact path="/contact" component={Contact} />
    //     <Route exact path="/resume" component={Resume} />
    //     <Footer />
    //   </div>
    // </Router>
    <ThemeProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />}>
              <Route path="/" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  );
};

export default App;
