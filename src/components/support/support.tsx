import React from "react";
import { SupportStyled } from "./support.styles";

//Assets

const ModalSupport = () => {
  return (
    <SupportStyled>
      <div className="container">
        <div className="register products">
          <button>
            <p>WhatsApp</p>
          </button>
        </div>

        <span/>

        <div className="stock">
          <button>
            <p>E-mail</p>
          </button>
        </div>

        <span/>
      </div>
    </SupportStyled>
  );
}
export default ModalSupport;