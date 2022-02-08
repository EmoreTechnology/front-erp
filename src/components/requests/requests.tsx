// Dependencies
import React from "react";

//Assets
import { RequestsStyled } from "./requests.styles";

interface IRequestsProps {
  createCommand?: string,
  openOrder?: string,
  closeOrder?: string,
}

const ModalRequests = ({ createCommand, openOrder, closeOrder }: IRequestsProps) => {
  return (
    <RequestsStyled>
      <div className="container">
        <div className="section">
          <a href="">{createCommand}</a>
        </div>

        <span />

        <div className="section">
          <a href="">{openOrder}</a>
        </div>

        <span />

        <div className="section">
          <a href="">{closeOrder}</a>
        </div>

        <span />
      </div>
    </RequestsStyled>
  );
}
export default ModalRequests;