import React from "react";
import { GlobalStyle } from "./style/global";
import Carrinho from "./pages/Carrinho_compras";

const App: React.FC = () => {
  return (
    <div className="App">
      <Carrinho />
      <GlobalStyle />
    </div>
  );
};

export default App;
