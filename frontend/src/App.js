import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container-fluid">
            <Routes>
              <Route path='/' element={ <ListEmployeeComponent /> }></Route>
              <Route path='/employees' element={ <ListEmployeeComponent /> }></Route>
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>

  );
}

export default App;
