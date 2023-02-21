import React, {useEffect, useState} from "react";

const Pokemon = (props) => {
    const [pokemon,setPokemon] = useState([]);

    useEffect( () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => response.json())
            .then(response => setPokemon(response.results))
        },[]);

    return (
        <div className="APP">
            <ol>
                {pokemon.length > 0 && pokemon.map((aPokemon, index)=>{
                    return (<li key={index}>{aPokemon.name}</li>)
                })}
            </ol>
        </div>
    )
}

export default Pokemon