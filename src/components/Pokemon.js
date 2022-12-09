import React, {useEffect, useState} from 'react';
import axios from "axios";

function Pokemon({name}) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemon(response.data);
                console.log(pokemon);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {Object.keys(pokemon).length > 0 &&
                <>
                    <article>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        <p><strong>Moves: </strong>{pokemon.moves.length} </p>
                        <p><strong>Weight: </strong>{pokemon.weight}</p>
                        <p><strong>Abilities: </strong></p>
                        <ul>
                            {pokemon.abilities.map((poke) => {
                                return <li key={pokemon.name}> {poke.ability.name}</li>
                            })} </ul>
                    </article>
                </>}
        </>
    );
}

export default Pokemon;
