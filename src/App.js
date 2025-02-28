import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

import Homes from './contents/Homes';

import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Route exact path="/">
          <Homes/>
        </Route>
      </div>
    </Router>
    
  );
}

export default App;