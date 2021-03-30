import { useContext, useEffect } from "react";

import PokemonContext from '../../context/pokemons/index';

const Home = () => {
    const { getPokemons , pokemons } = useContext(PokemonContext);
    console.log(pokemons);
    
    useEffect(() => {
        getPokemons().catch(null);
    },[])

    return(
        <h1>Página principal</h1>
    )
}

export default Home;