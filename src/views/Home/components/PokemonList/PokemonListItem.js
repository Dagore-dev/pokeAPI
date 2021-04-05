import { Link } from "react-router-dom"

const PokemonListItem = ( { name, url } ) => {
    const getId = () => url.split('/')[6];

    return <li className='pokemonList__item'> <Link className='pokemonList__link' to={`/pokemon/${getId()}`}> {name} </Link> </li>
}

export default PokemonListItem;