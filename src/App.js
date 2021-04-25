import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navbar.js'
import FooterComp from './components/Footer.js'
import SurveyOne from './components/surveylogic/surveytypeone';



function App() {
  return (
    <>
        <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/surveydisplay' component={SurveyOne} />
          </Switch>
          <FooterComp/> 
        </Router>
    </>
  );
}

export default App;