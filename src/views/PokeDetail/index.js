import { useContext, useEffect } from "react";
import { useParams } from "react-router";

import PokemonContext from "../../context/pokemons";
import PokeStats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from '../../components/ErrorMessage';

const PokeDetail = () => {
    const { id } = useParams();
    const { getPokeDetail, pokeDetail, isLoading, hasError, errorMsg } = useContext(PokemonContext);
    
    useEffect(() => {
        getPokeDetail(id).catch(null); // eslint-disable-next-line
    },[])

    console.log(pokeDetail);

    if(isLoading) return <Loading title='pokemon'/>;

    return(
        <>
            {hasError ? <ErrorMessage message={errorMsg}/> : 
            (<>
                <h1>{`Detalle de ${pokeDetail?.name}`}</h1>

                <ul>
                    <li>Peso: {`${pokeDetail?.weight}`}</li>

                    <li>Altura: {`${pokeDetail?.height}`}</li>
                </ul>

                <PokeStats stats={pokeDetail?.stats ?? []} />
            </>)}
        </>
    )
}

export default PokeDetail;