import React, { useState } from "react";
import { MenuStyled } from './menu.styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Assets
import iconSelect from "../../Assets/icon-select.png";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

//Pages
import ModalUser from "../user/user";
import ModalProducts from "../product/product";
import ModalPurchases from "../purchases/purchases";
import ModalRequests from "../requests/requests";
import ModalFinancial from "../financial/financial";
import ModalSupport from "../support/support";


const SideBar = ({ openClass, children }: any) => {
  const [isUserVisible, setIsUserVisible] = useState(false);
  const [isProductVisible, setIsProductsVisible] = useState(false);
  const [isPurchasesVisible, setIsPurchasesVisible] = useState(false);
  const [isRequestsVisible, setIsRequestsVisible] = useState(false);
  const [isFinancialVisible, setIsFinancialVisible] = useState(false);
  const [isSupportVisible, setIsSupportVisible] = useState(false);

  const toggling1 = () => setIsUserVisible(!isUserVisible);
  const toggling2 = () => setIsProductsVisible(!isProductVisible);
  const toggling3 = () => setIsPurchasesVisible(!isPurchasesVisible);
  const toggling4 = () => setIsRequestsVisible(!isRequestsVisible);
  const toggling5 = () => setIsFinancialVisible(!isFinancialVisible);
  const toggling6 = () => setIsSupportVisible(!isSupportVisible);

  return (
    <MenuStyled>
      <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
        <div className="container">
          {children}
          <div className="content">
            <li onClick={toggling1}>
              <div className="sections">
                <FontAwesomeIcon icon={faUserCircle} />
                <p>Usuário</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>
            {isUserVisible ?
              <ModalUser/>
              : null}

            <span />

            <li onClick={toggling2}>
              <div className="sections">
                <FontAwesomeIcon icon={faListAlt} />
                <p>Produtos</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>
            {isProductVisible ?
              <ModalProducts/>
              : null}

            <span />

            <li onClick={toggling3}>
              <div className="sections">
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>Compras</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>
            {isPurchasesVisible ?
              <ModalPurchases/>
              : null}

            <span />

            <li onClick={toggling4}>
              <div className="sections">
                <FontAwesomeIcon icon={faClipboardList} />
                <p>Pedidos</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>
            {isRequestsVisible ?
              <ModalRequests/>
              : null}

            <span />

            <li onClick={toggling5}>
              <div className="sections">
                <FontAwesomeIcon icon={faCoins} />
                <p>Financeiro</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>
            {isFinancialVisible ?
              <ModalFinancial/>
              : null}

            <span />

            <li onClick={toggling6}>
              <div className="sections">
                <FontAwesomeIcon icon={faHandsHelping} />
                <p>Suporte</p>
              </div>
              <img className="select" src={iconSelect} alt=""/>
            </li>
            {isSupportVisible ?
              <ModalSupport/>
              : null}

            <span />
          </div>

          <button className="close">
            <div className="sections">
              <FontAwesomeIcon icon={faPowerOff} />
              <p>Sair</p>
            </div>
          </button>
        </div>
      </nav>
    </MenuStyled>
  );
}

export default SideBar;
