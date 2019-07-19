import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import CreateCard from './components/Card';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [resultState, setResultState] = useState([])

  useEffect(() => {
    Axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log('response.data.results: ', response.data.results)
        setResultState(response.data.results)
        console.log(resultState)
      })
      .catch(error => {
        console.log('An unexpected error has occurred. Have you tried unplugging it and plugging it back in again?', error)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CreateCard />
    </div>
  );
}

export default App;
