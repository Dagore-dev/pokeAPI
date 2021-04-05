

const PokeStats = ({ stats }) => {

    return(
        <ul className='pokeDetail__list'>
            {stats?.map(({ stat, base_stat }, index) => (
                <li key={index}> {stat.name}: {base_stat} </li>
            ))}
        </ul>
    )
}

export default PokeStats;