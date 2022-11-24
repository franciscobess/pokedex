import React from 'react'

function PokemonsSideList({ pokemonName }) {
    return (
        <div className='pokemons-side-list-container'>
            <nav className='pokemons-side-list'>
                <ul>
                    <li>{pokemonName}</li>
                </ul>
            </nav>

        </div>
    )
}

export default PokemonsSideList