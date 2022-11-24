import './App.css';
import PokedexHeader from './components/PokedexHeader';
import PokemonInfo from './components/PokemonInfo';
import PokedexFooter from './components/PokedexFooter';
import PokemonsSideList from './components/PokemonsSideList';

function App() {

  async function fetchPokemonsList() {
    const API_URL = "https://pokeapi.co/api/v2/pokemon/"
    const response = await fetch(API_URL)

    return response
  }

  fetchPokemonsList()
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem('myEventsArray', JSON.stringify(data.results))
    })

  let pokemonsArray = JSON.parse(localStorage.getItem('myEventsArray'))

  return (
    <div className="App">
      <PokedexHeader />
      {pokemonsArray.map((pokemon) => (
        <PokemonsSideList pokemonName={pokemon.name}/>
      ))}
      <PokemonInfo />
      <PokedexFooter />
    </div>
  );
}

export default App;
