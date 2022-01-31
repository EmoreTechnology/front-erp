import React from "react";
import { UserStyled } from "./user.styles";

//Assets

const ModalUser = () => {
  return(
    <UserStyled>
      <div className="container">
        <div className="users">
          <button>
            <p>Editar cadastro</p>
          </button>
        </div>

        <span/>

        <div className="personal infos">
          <button>
            <p>Informações pessoais</p>
          </button>
        </div>

        <span/>

        <div className="change password">
          <button>
            <p>Alterar senha</p>
          </button>
        </div>

        <span/>

        <div className="remove user">
          <button>
            <p>Remover usuário</p>
          </button>
        </div>

        <span/>
      </div>
    </UserStyled>
  );
}
export default ModalUser;