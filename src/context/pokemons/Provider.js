import PokemonContext from './index';
import apiCall from '../../api/';
import { useState } from 'react';

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokeDetail, setPokeDetail] = useState({});

    const getPokemons = async () => {
        try{
            const pokemonsResult = await apiCall( { url:'https://pokeapi.co/api/v2/pokemon?limit=100' } );
            setPokemons(pokemonsResult.results)
        }
        catch(e){
            setPokemons([]);
        }
    }

    const getPokeDetail = async (id) => {
        if(!id) Promise.reject('Se requiere id');
        try{
            const pokemonDetail = await apiCall( { url:`https://pokeapi.co/api/v2/item/${id}` } );
            setPokeDetail(pokemonDetail);
        }
        catch(e){
            setPokeDetail({});
        }
    }

    return(
        <PokemonContext.Provider value={{ getPokemons, getPokeDetail, pokeDetail, pokemons }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;