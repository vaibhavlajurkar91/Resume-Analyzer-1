import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './Pages/About';
import Navbar from './Components/Navbar'; // Assuming you have a Navbar component
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
