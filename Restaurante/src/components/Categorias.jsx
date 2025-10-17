const Categorias = ({
  numCategoriaSelecionada,
  SetNumCategoriaSelecionada,
}) => {
  return (
    <div className="categorias">
      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 0 ? "categoria--selecionada" : "")
        }
        onClick={() => SetNumCategoriaSelecionada(0)}
      >
        Pratos Pricipais
      </p>

      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 1 ? "categoria--selecionada" : "")
        }
        onClick={() => SetNumCategoriaSelecionada(1)}
      >
        Sobremesas
      </p>

      <p
        className={
          "categoria" +
          (numCategoriaSelecionada === 2 ? "categoria--selecionada" : "")
        }
        onClick={() => SetNumCategoriaSelecionada(2)}
      >
        Bebidas
      </p>
    </div>
  );
};

export default Categorias;
