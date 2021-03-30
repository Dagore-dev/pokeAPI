import { useContext, useEffect } from "react";

import PokemonContext from '../../context/pokemons/index';
import PokemonList from "./components/PokemonList/PokemonList";

const Home = () => {
    const { getPokemons , pokemons } = useContext(PokemonContext);
    console.log(pokemons);
    
    useEffect(() => {
        getPokemons().catch(null);
    },[])

    return(
        <>
            <PokemonList pokemons={pokemons}/>
        </>
    )
}

export default Home;