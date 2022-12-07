import React, {useEffect, useState} from 'react';
import axios from "axios";

function Pokemon(props) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
                setPokemon(response.data);
                console.log(pokemon);
            } catch(e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <article>
                <h2>{pokemon.name}</h2>
                <p><strong>Moves: </strong>{pokemon.moves.length} </p>
                <p> <strong>Weight: </strong>{pokemon.weight}</p>
                <p><strong>Abilities: </strong></p>
                <ul>
                    {pokemon.abilities.map((poke) => {
                        return (
                            <li key={pokemon.id}> {poke.ability.name}</li>
                        )
                    })} </ul>
            </article>
        </>
    );
}

export default Pokemon;
