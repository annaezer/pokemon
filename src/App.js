import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios'
import Pokemon from "./components/Pokemon";

function App() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, toggleError] = useState(false);
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();


    useEffect(() => {
        setLoading(true);

        async function getCards() {
            try {
                toggleError(false);
                setLoading(false);
                const response = await axios.get(currentPageUrl);
                console.log(response);
                const twentyPokemon = response.data.results;
                console.log(twentyPokemon);
                setPokemons(twentyPokemon);
                setNextPageUrl(response.data.next);
                setPrevPageUrl(response.data.previous);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
        }

        getCards();

    }, [currentPageUrl])

    function nextTwenty() {
        setCurrentPageUrl(nextPageUrl);
    }

    function prevTwenty() {
        setCurrentPageUrl(prevPageUrl);
    }

    return (
        <>
            {loading && <p>Data is fetched...</p>}
            {error && <p>Error: Could not fetch data!</p>}

            {Object.keys(pokemons).length > 0 &&
                <>
                    <header>
                        <h1>Pokemon</h1>
                        {prevPageUrl && <button onClick={prevTwenty}> Vorige</button>}
                        {nextPageUrl && <button onClick={nextTwenty}> Volgende</button>}
                    </header>
                    <main>
                        <ul>
                            {pokemons.map((pokemon) => {
                                return <Pokemon name={pokemon.name} key={pokemon.name}/>
                            })
                            }
                        </ul>
                    </main>
                </>}
        </>
    );
}

export default App;
