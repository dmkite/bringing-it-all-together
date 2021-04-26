import './App.css'
import {PokemonList} from './components/PokemonList'
import {Description} from './components/Description'

function App() {
  return (
    <main>
      <header>
        <h1>Pokemon</h1>
      </header>
        <Description/>
      <article>
        <PokemonList/>
      </article>
    </main>
  );
}

export default App
