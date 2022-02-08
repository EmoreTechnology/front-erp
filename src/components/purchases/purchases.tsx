// Dependencies
import React from "react";

// Style
import { PurchasesStyled } from "./purchases.styles";

interface IPurchasesProps {
  createProviders?: string,
  productEntry?: string,
  dynamicReport?: string,
}

const ModalPurchases = ({ createProviders, productEntry, dynamicReport }: IPurchasesProps) => {
  return (
    <PurchasesStyled>
      <div className="container">
        <div className="section">
          <a href="">{createProviders}</a>
        </div>

        <span />

        <div className="section">
          <a href="">{productEntry}</a>
        </div>

        <span />

        <div className="section">
          <a href="">{dynamicReport}</a>
        </div>

        <span />
      </div>
    </PurchasesStyled>
  );
}
export default ModalPurchases;