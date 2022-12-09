import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Pokemon from "./components/Pokemon";

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        async function getCards() {
            try {
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
                const twentyPokemon = response.data.results;
                console.log(twentyPokemon);
                setPokemons(twentyPokemon);
            } catch (e) {
                console.error(e);
            }
        }

        getCards();
    }, [])

    return (
        <>
            {Object.keys(pokemons).length > 0 &&
                <>
                    <header>
                        <h1>Pokemon</h1>
                        <button> Vorige</button>
                        <button> Volgende</button>
                    </header>
                    <main>
                        <ul>
                            {pokemons.map((pokemon) => {
                                return <Pokemon name={pokemon.name} key={pokemons.name}/>
                            })
                            }
                        </ul>
                    </main>
                </>}
        </>
    );
}

export default App;
