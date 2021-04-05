import { useContext, useEffect } from "react";

import './styles.css';
import PokemonContext from '../../context/pokemons/index';
import PokemonList from "./components/PokemonList/PokemonList";
import Loading from "../../components/Loading";
import ErrorMessage from '../../components/ErrorMessage';

const Home = () => {
    const { getPokemons , pokemons, isLoading, hasError, errorMsg } = useContext(PokemonContext);
    
    useEffect(() => {
        getPokemons().catch(null); // eslint-disable-next-line
    },[])

    if(isLoading) return <Loading title='pokemons'/>;

    return(
        <>
            <h1>Lista de pokemons</h1>

            {hasError ? <ErrorMessage message={errorMsg}/> : <PokemonList pokemons={pokemons}/>}
        </>
    )
}

export default Home;