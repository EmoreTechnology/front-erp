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
          <button>
            <p>{createProviders}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{productEntry}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{dynamicReport}</p>
          </button>
        </div>

        <span/>
      </div>
    </PurchasesStyled>
  );
}
export default ModalPurchases;