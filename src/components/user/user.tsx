// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { UserStyled } from "./user.styles";

interface IUserProps {
  createUsers?: string,
  createInfos?: string,
  createPassword?: string,
  createRemoveUsers?: string,
}

const ModalUser = ({createUsers, createInfos, createPassword, createRemoveUsers}:IUserProps) => {
  return(
    <UserStyled>
      <div className="container">
        <div className="section">
            <a href="">{createUsers}</a>
        </div>

        <span/>

        <div className="section">
          <a href="">{createInfos}</a>
        </div>

        <span/>

        <div className="section">
          <a href="">{createPassword}</a>
        </div>

        <span/>

        <div className="section">
          <a href="">{createRemoveUsers}</a>
        </div>

        <span/>
      </div>
    </UserStyled>
  );
}
export default ModalUser;