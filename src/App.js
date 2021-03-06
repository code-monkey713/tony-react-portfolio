import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Navbar />
          <Drawer
            title={
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
                Tony Tran
              </Link>
            }
          >
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
