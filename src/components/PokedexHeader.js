import PokedexLogo from '../assets/pokedex-logo.png'

function PokedexHeader() {
    return (
        <div>
            <header>
                <img src={PokedexLogo} alt="Pokedex Logo" className="pokedex-logo"/>
            </header>
        </div>
    )
}

export default PokedexHeader