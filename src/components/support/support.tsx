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
            <a href="">{createWpp}</a>
        </div>

        <span/>

        <div className="section">
            <a href="">{createEmail}</a>
        </div>

        <span/>
      </div>
    </SupportStyled>
  );
}
export default ModalSupport;