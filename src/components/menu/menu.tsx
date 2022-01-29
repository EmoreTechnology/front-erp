import React from "react";
import { MenuStyled } from './menu.styles';

//Assets
import iconUser from "../../Assets/icon-user.png";
import iconSupport from "../../Assets/icon-support.png";
import iconRequest from "../../Assets/icon-requests.png";
import iconProduct from "../../Assets/icon-products.png";
import iconLogof from "../../Assets/icon-logof.png";
import iconFinancial from "../../Assets/icon-financial.png";
import iconBuy from "../../Assets/icon-buy.png";
import iconSelect from "../../Assets/icon-select.png";


const SideBar = ({ openClass }: any) => {

  const [on, setOn] = React.useState(false);

  const handleOn = () => {
    setOn(!on);
  };

  return (
    <MenuStyled>
      <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
        <div className="container">
          <div className="content">
            <li>
              <div className="sections">
                <img src={iconUser} alt=""/>
                <p>Usuário</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>

            <span/>

            <li>
              <div className="sections">
                <img src={iconProduct} alt=""/>
                <p>Produtos</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>

            <span/>

            <li>
              <div className="sections">
                <img src={iconBuy} alt=""/>
                <p>Compras</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>

            <span/>

            <li>
              <div className="sections">
                <img src={iconRequest} alt=""/>
                <p>Pedidos</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>

            <span/>

            <li>
              <div className="sections">
                <img src={iconFinancial} alt=""/>
                <p>Financeiro</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>

            <span />

            <li>
              <div className="sections">
                <img src={iconSupport} alt=""/>
                <p>Suporte</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>
            <span/>
          </div>

          <button className="close">
            <div className="sections">
              <img src={iconLogof} alt=""/>
              <p>Sair</p>
            </div>
          </button>
        </div>
      </nav>
    </MenuStyled>
  );
}

export default SideBar;
