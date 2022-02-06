// Dependencies
import React from "react";

// Styles
import { SupportStyled } from "./support.styles";

interface ISupportProps {
  createWpp?: string,
  createEmail?: string,
}

const ModalSupport = ({ createWpp, createEmail}: ISupportProps) => {
  return (
    <SupportStyled>
      <div className="container">
        <div className="section">
          <button>
            <p>{createWpp}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{createEmail}</p>
          </button>
        </div>

        <span/>
      </div>
    </SupportStyled>
  );
}
export default ModalSupport;