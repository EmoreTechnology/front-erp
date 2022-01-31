import React from "react";
import { ProductStyled } from "./product.styles";

//Assets

const ModalProducts = () => {
  return (
    <ProductStyled>
      <div className="container">
        <div className="register products">
          <button>
            <p>Cadastrar produto</p>
          </button>
        </div>

        <span/>

        <div className="stock">
          <button>
            <p>Estoque</p>
          </button>
        </div>

        <span/>

        <div className="categories">
          <button>
            <p>Categorias</p>
          </button>
        </div>

        <span/>
      </div>
    </ProductStyled>
  );
}
export default ModalProducts;