import QuoteCard from './components/QuoteCard';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [simpsonQuote , setSimpsonQuote] = useState (sampleQuote)

  const getQuote = () => {
    //envoie une requête 
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    //extrait les données 
    .then((reponse) => reponse.data)
    //utilise les données pour mettre à jour la state
    .then((data) => {
      console.log(data)
      setSimpsonQuote(data[0]);
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='mainTitle'> The Simpsons Quotes </h1>
      </header>
      <QuoteCard  card={simpsonQuote} />
      <button type='button' className="changeButton" onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;


const sampleQuote = {

    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left",
}