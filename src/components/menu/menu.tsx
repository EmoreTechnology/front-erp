import React, { useState } from "react";
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

//Pages
import ModalUser from "../user/user";
import ModalProducts from "../product/product";
import ModalPurchases from "../purchases/purchases";
import ModalRequests from "../requests/requests";
import ModalFinancial from "../financial/financial";
import ModalSupport from "../support/support";


const SideBar = ({ openClass }: any) => {
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
          <div className="content">
            <li onClick={toggling1}>
              <div className="sections">
                <img src={iconUser} alt=""/>
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
                <img src={iconProduct} alt=""/>
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
                <img src={iconBuy} alt=""/>
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
                <img src={iconRequest} alt=""/>
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
                <img src={iconFinancial} alt=""/>
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
                <img src={iconSupport} alt="" />
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
