// Dependencies
import React from "react";

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
          <button>
            <p>{createUsers}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{createInfos}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{createPassword}</p>
          </button>
        </div>

        <span/>

        <div className="section">
          <button>
            <p>{createRemoveUsers}</p>
          </button>
        </div>

        <span/>
      </div>
    </UserStyled>
  );
}
export default ModalUser;