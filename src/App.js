import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar.js'
import SurveyOne from './components/surveylogic/surveytypeone';
import Footer from './components/Footer.js'
import Mock from './components/pages/mockdisplay';


function App() {
  return (
    <>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/surveydisplay' component={SurveyOne} />
            <Route path='/mockdisplay' component={Mock} />
          </Switch>
          <Footer/>
        </Router>
    </>
  );
}

export default App;

