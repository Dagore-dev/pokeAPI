import PokemonContext from './index';
import apiCall from '../../api/';
import { useState } from 'react';

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const getPokemons = async () => {
        try{
            const pokemonsResult = await apiCall( { url:'https://pokeapi.co/api/v2/pokemon?limit=100' } );
            setPokemons(pokemonsResult.results)
        }
        catch(e){
            setPokemons([]);
            console.log(e);
        }
    }

    return(
        <PokemonContext.Provider value={{ getPokemons, pokemons }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;