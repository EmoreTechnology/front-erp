//Depedences
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Styles
import { MenuStyled } from './menu.styles';

//Assets
import iconSelect from "../../Assets/icon-select.png";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

//Pages
import ModalUser from "../user/user";
import ModalProducts from "../product/product";
import ModalPurchases from "../purchases/purchases";
import ModalRequests from "../requests/requests";
import ModalFinancial from "../financial/financial";
import ModalSupport from "../support/support";

//Hooks
import authService from "../../contexts/auth";


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

  const logOut = () => {
    authService.logout();
  };

  return (
    <MenuStyled>
      <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
        <div className="container">
          {children}
          <div className="content">

            <li >
              <a href="/logged">
                <div className="sections">
                  <FontAwesomeIcon icon={faHome} />
                  <p>Home</p>
                </div>
              </a>
            </li>

            <li onClick={toggling1}>
              <div className="sections">
                <FontAwesomeIcon icon={faUserCircle} />
                <p>Usu??rio</p>
              </div>
              <img className="select" src={iconSelect} alt="" />
            </li>
            {isUserVisible ?
              <ModalUser
                createUsers="Editar cadastro"
                createInfos="Iforma????es pessoais"
                createPassword="Alterar senha"
                createRemoveUsers="Remover usu??rio"
              />
              : null}

            <span />

            <li onClick={toggling2}>
              <div className="sections">
                <FontAwesomeIcon icon={faListAlt} />
                <p>Produtos</p>
              </div>
              <img className="select" src={iconSelect} alt="" />
            </li>
            {isProductVisible ?
              <ModalProducts
                createProducts="Cadastro de produtos"
                createStock="Estoque"
              />
              : null}

            <span />

            <li onClick={toggling3}>
              <div className="sections">
                <FontAwesomeIcon icon={faShoppingCart} />
                <p>Compras</p>
              </div>
              <img className="select" src={iconSelect} alt="" />
            </li>
            {isPurchasesVisible ?
              <ModalPurchases
                createProviders="Cadastro de fornecedores"
                productEntry="Entrada de produtos"
                dynamicReport="Relat??rios din??micos"
              />
              : null}

            <span />

            <li onClick={toggling4}>
              <div className="sections">
                <FontAwesomeIcon icon={faClipboardList} />
                <p>Pedidos</p>
              </div>
              <img className="select" src={iconSelect} alt="" />
            </li>
            {isRequestsVisible ?
              <ModalRequests
                createCommand="Criar comanda"
                openOrder="Efetuar pedido"
                closeOrder="Fechar comanda"
              />
              : null}

            <span />

            <li onClick={toggling5}>
              <div className="sections">
                <FontAwesomeIcon icon={faCoins} />
                <p>Financeiro</p>
              </div>
              <img className="select" src={iconSelect} alt="" />
            </li>
            {isFinancialVisible ?
              <ModalFinancial
                createPayBills="Contas a pagar"
                createBox="Caixa"
                createReports="Relat??rios"
              />
              : null}

            <span />

            <li onClick={toggling6}>
              <div className="sections">
                <FontAwesomeIcon icon={faHandsHelping} />
                <p>Suporte</p>
              </div>
              <img className="select" src={iconSelect} alt="" />
            </li>
            {isSupportVisible ?
              <ModalSupport
                createWpp="WhatsApp"
                createEmail="E-mail"
              />
              : null}

            <span />
          </div>

          <a href="/home" onClick={logOut} className="close">
            <div className="sections">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <p>Sair</p>
            </div>
          </a>
        </div>
      </nav>
    </MenuStyled>
  );
}

export default SideBar;
