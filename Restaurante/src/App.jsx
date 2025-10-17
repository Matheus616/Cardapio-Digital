import "./App.css";
import Categorias from "./components/Categorias";
import Cards from "./components/Cards";
import Banner from "./components/Banner";
import { useState } from "react";

function App() {
  //Hooks
  //Variável de estado
  const [numCategoriaSelecionada, SetNumCategoriaSelecionada] = useState(0);

  //Forma errada
  // numCategoriaSelecionada = 1

  //Forma certa
  // SetNumCategoriaSelecionada(1);

  return (
    <div className="container">
      <Banner />

      <Categorias
        numCategoriaSelecionada={numCategoriaSelecionada}
        SetNumCategoriaSelecionada={SetNumCategoriaSelecionada}
      />

      <Cards numCategoriaSelecionada={numCategoriaSelecionada} />
    </div>
  );
}

export default App;
