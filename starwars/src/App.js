import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import Cards from './components/Cards';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        setCharacters(response.data.results)
        console.log(response)
      })
      .catch(error => {
        console.log('An unexpected error has occurred. Have you tried unplugging it and plugging it back in again?', error)
      })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cards characters={characters} />
    </div>
  );
}

export default App;
