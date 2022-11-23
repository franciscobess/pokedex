import './App.css';

import PokedexHeader from './components/PokedexHeader';
import PokemonInfo from './components/PokemonInfo';
import PokedexFooter from './components/PokedexFooter';
import PokemonsSideList from './components/PokemonsSideList';

function App() {
  return (
    <div className="App">
      <PokedexHeader />
      <PokemonsSideList/>
      <PokemonInfo/>
      <PokedexFooter/>
      
    </div>
  );
}

export default App;
