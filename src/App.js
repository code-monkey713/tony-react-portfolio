import './App.css';
import NavBar from './components/Navbar';
import NavTabs from './components/NavTabs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
        <NavTabs />
        {/* <Home /> */}
      </div>
    </Router>
  );
};

export default App;
