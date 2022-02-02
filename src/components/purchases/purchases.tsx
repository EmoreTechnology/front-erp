import React from "react";
import { PurchasesStyled } from "./purchases.styles";

//Assets

const ModalPurchases = () => {
  return (
    <PurchasesStyled>
      <div className="container">
        <div className="users">
          <button>
            <p>Cadastro de fornecedores</p>
          </button>
        </div>

        <span/>

        <div className="personal infos">
          <button>
            <p>Entrada de produtos</p>
          </button>
        </div>

        <span/>

        <div className="change password">
          <button>
            <p>Relatórios dinâmicos</p>
          </button>
        </div>

        <span/>
      </div>
    </PurchasesStyled>
  );
}
export default ModalPurchases;