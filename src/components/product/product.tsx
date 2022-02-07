// Dependencies
import React from "react";

// Style
import { ProductStyled } from "./product.styles";

interface IProductsProps {
  createProducts?: string,
  createStock?: string,
}

const ModalProducts = ({createProducts, createStock}: IProductsProps) => {
  return (
    <ProductStyled>
      <div className="container">
        <div className="section">
          <button>
            <p>{createProducts}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{createStock}</p>
          </button>
        </div>

        <span/>

      </div>
    </ProductStyled>
  );
}
export default ModalProducts;