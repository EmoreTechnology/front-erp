import React from "react";
import { RequestsStyled } from "./requests.styles";

//Assets

const ModalRequests = () => {
  return (
    <RequestsStyled>
      <div className="container">
        <div className="register products">
          <button>
            <p>Criar comanda</p>
          </button>
        </div>

        <span/>

        <div className="stock">
          <button>
            <p>Efetuar pedido</p>
          </button>
        </div>

        <span/>

        <div className="categories">
          <button>
            <p>Fechar Pedido</p>
          </button>
        </div>

        <span/>
      </div>
    </RequestsStyled>
  );
}
export default ModalRequests;