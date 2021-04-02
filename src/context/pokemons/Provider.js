import PokemonContext from './index';
import apiCall from '../../api/';
import { useState } from 'react';

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokeDetail, setPokeDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const getPokemons = async () => {
        try{
            setHasError(false);
            setErrorMsg('');
            setIsLoading(true);
            const pokemonsResult = await apiCall( { url:'https://pokeapi.co/api/v2/pokemon?limit=100' } );
            setPokemons(pokemonsResult.results)
        }
        catch(e){
            setPokemons([]);
            setHasError(true);
            setErrorMsg('Se ha producido un error');
        }
        finally{
            setIsLoading(false);
        }
    }

    const getPokeDetail = async (id) => {
        if(!id) Promise.reject('Se requiere id');
        try{
            setHasError(false);
            setErrorMsg('');
            setIsLoading(true);
            const pokemonDetail = await apiCall( { url:`https://pokeapi.co/api/v2/pokemon/${id}` } );
            setPokeDetail(pokemonDetail);
        }
        catch(e){
            setPokeDetail({});
            setHasError(true);
            setErrorMsg('Se ha producido un error');
        }
        finally{
            setIsLoading(false);
        }
    }

    return(
        <PokemonContext.Provider value={{ getPokemons, getPokeDetail, pokeDetail, pokemons, isLoading, hasError, errorMsg}}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider;