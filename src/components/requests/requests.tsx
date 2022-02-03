// Dependencies
import React from "react";

//Assets
import { RequestsStyled } from "./requests.styles";

interface IRequestsProps {
  createCommand?: string,
  openOrder?: string,
  closeOrder?: string,
}

const ModalRequests = ({ createCommand, openOrder, closeOrder}: IRequestsProps) => {
  return (
    <RequestsStyled>
      <div className="container">
        <div className="section">
          <button>
            <p>{createCommand}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{openOrder}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{closeOrder}</p>
          </button>
        </div>

        <span/>
      </div>
    </RequestsStyled>
  );
}
export default ModalRequests;