// Dependencies
import React from "react";

// Styles
import { FinancialStyled } from "./financial.styles";

interface IFinancialProps {
  createPayBills?: string,
  createBox?: string,
  createReports?: string,
}

const ModalFinancial = ({createPayBills, createBox, createReports}: IFinancialProps)  => {
  return (
    <FinancialStyled>
      <div className="container">
        <div className="section">
          <button>
            <p>{createPayBills}</p>
          </button>
        </div>

        <span />

        <div className="section">
          <button>
            <p>{createBox}</p>
          </button>
        </div>

        <span />

        <div className="section">
          <button>
            <p>{createReports}</p>
          </button>
        </div>

        <span />
      </div>
    </FinancialStyled>
  );
}
export default ModalFinancial;