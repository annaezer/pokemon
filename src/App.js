import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Pokemon from "./components/Pokemon";

    function App() {

  return (
    <>
        <header>
            <h1>Pokemon</h1>
            <button> Vorige </button>
            <button> Volgende </button>
        </header>
        <main>
            <Pokemon/>
        </main>
    </>
  );
}

export default App;
