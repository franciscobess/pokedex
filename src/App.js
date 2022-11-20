import './App.css';
import Pikachu from './assets/sprites/pikachu.jpg'
import PokedexLogo from './assets/pokedex-logo.png'

function App() {
  return (
    <div className="App">
      <div className='pokemon-logo-container'>
        <img src={PokedexLogo} alt="Pokedex Logo" className='pokedex-logo-img' />
      </div>

      <div className='pokemon-info-container'>
        <div className='pokemon-sprite'>
          <img src={Pikachu} className='pokemon-sprite-img' alt="Pokemon Sprite" />
        </div>

        {/* <div className='pokedex-description'>
          <h2>Descrição</h2>
        </div> */}
      </div>

    </div>
  );
}

export default App;
