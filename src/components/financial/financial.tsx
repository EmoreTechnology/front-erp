// Dependencies
import React from "react";

// Styles
import { FinancialStyled } from "./financial.styles";

interface IFinancialProps {
  createPayBills?: string,
  createBox?: string,
  createReports?: string,
}

const ModalFinancial = ({ createPayBills, createBox, createReports }: IFinancialProps) => {
  return (
    <FinancialStyled>
      <div className="container">
        <div className="section">
          <a href="">{createPayBills}</a>
        </div>

        <span />

        <div className="section">
          <a href="">{createBox}</a>
        </div>

        <span />

        <div className="section">
          <a href="">{createReports}</a>
        </div>

        <span />
      </div>
    </FinancialStyled>
  );
}
export default ModalFinancial;