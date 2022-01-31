import React from "react";
import { FinancialStyled } from "./financial.styles";

//Assets

const ModalFinancial = () => {
  return (
    <FinancialStyled>
      <div className="container">
        <div className="register products">
          <button>
            <p>Contas a pagar</p>
          </button>
        </div>

        <span />

        <div className="stock">
          <button>
            <p>Caixa</p>
          </button>
        </div>

        <span />

        <div className="categories">
          <button>
            <p>Relatórios</p>
          </button>
        </div>

        <span />
      </div>
    </FinancialStyled>
  );
}
export default ModalFinancial;