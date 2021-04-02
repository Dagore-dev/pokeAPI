import { Link } from "react-router-dom"

const PokemonListItem = ( { name, url } ) => {
    const getId = () => url.split('/')[6];

    return <li> {name} <button><Link to={`/pokemon/${getId()}`}>Ver detalle</Link></button> </li>
}

export default PokemonListItem;