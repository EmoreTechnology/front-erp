// Dependencies
import React from "react";

// Style
import { ProductStyled } from "./product.styles";

interface IProductsProps {
  createProducts?: string,
  createStock?: string,
}

const ModalProducts = ({ createProducts, createStock }: IProductsProps) => {
  return (
    <ProductStyled>
      <div className="container">
        <div className="section">
          <a href="">{createProducts}</a>
        </div>

        <span />

        <div className="section">
          <a href="">{createStock}</a>
        </div>

        <span />
      </div>
    </ProductStyled>
  );
}
export default ModalProducts;