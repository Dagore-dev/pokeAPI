import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import PokemonContext from "../../context/pokemons";

const PokeDetail = () => {
    const { id } = useParams();
    const { getPokeDetail, pokeDetail } = useContext(PokemonContext);
    
    useEffect(() => {
        getPokeDetail(id).catch(null);
    },[])

    console.log(pokeDetail);

    return(
        <h1>Detalle de un pokemon</h1>
    )
}

export default PokeDetail;