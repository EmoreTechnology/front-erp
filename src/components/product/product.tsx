// Dependencies
import React from "react";

// Style
import { ProductStyled } from "./product.styles";

interface IProductsProps {
  createProducts?: string,
  createStock?: string,
  createCategories?: string,
}

const ModalProducts = ({createProducts, createStock, createCategories}: IProductsProps) => {
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

        <div className="section">
          <button>
            <p>{createCategories}</p>
          </button>
        </div>

        <span/>
      </div>
    </ProductStyled>
  );
}
export default ModalProducts;