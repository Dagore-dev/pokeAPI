import PokemonListItem from './PokemonListItem';

const PokemonList = ( { pokemons } ) => {

    return(
        <ul>
            {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon}/>)}
        </ul>

    )
}

export default PokemonList;