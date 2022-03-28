import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
        />

        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main>
        <h2>CEP: 72309420</h2>

        <span>Rua Teste</span>
        <span>Complemento: Algum</span>
        <span>Vila Cavalo</span>
        <span>Porto Velho - RO</span>
      </main>

    </div>
  );
}

export default App;
