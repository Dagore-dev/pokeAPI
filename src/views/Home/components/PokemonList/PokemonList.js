import PokemonListItem from './PokemonListItem';

const PokemonList = ( { pokemons } ) => {

    return(
        <ul className='pokemonList'>
            {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon}/>)}
        </ul>

    )
}

export default PokemonList;