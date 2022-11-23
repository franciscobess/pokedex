import Pokemon from '../assets/sprites/001.png'

function PokemonInfo() {
    return (
        <div>
            <section className="grid">
                <div className="grid-item" id='sprite-div'>
                    <h1 id='pokemon-id-name'>Nº 001 Bulbasaur</h1>
                    <img src={Pokemon} alt="" className='sprite' />
                </div>
                <div className="grid-item" >
                    <h1>Description</h1>
                    <p>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</p>
                </div>
                <div className="grid-item" >
                    <h1>Type</h1>
                    <div className="grid-item-types">
                        <p className='grass'>Grass</p>
                        <p className='poison'>Poison</p>
                    </div>
                </div>
                <div className="grid-item" >
                    <h1>Weaknesses</h1>
                    <div className="grid-item-types">
                        <p className='fire'>Fire</p>
                        <p className='psychic'>Psychic</p>
                        <p className='flying'>Flying</p>
                    </div>
                </div>
                <div className="grid-item" id='flex'>
                <div className='info-box'>
                        <h1>Height</h1>
                        <p>0.7 m</p>
                    </div>
                    <div className='info-box'>
                        <h1>Weight</h1>
                        <p>6.9 kg</p>
                    </div>
                    <div className='info-box'>
                        <h1>Category</h1>
                        <p>Seed</p>
                    </div>
                    <div className='info-box'>
                        <h1>Abilities</h1>
                        <p>Overgrow</p>
                    </div>
                    <div className='info-box'>
                        <h1>Gender</h1>
                        <p>♂/♀</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PokemonInfo