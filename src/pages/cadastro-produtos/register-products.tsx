// Dendencies
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import Accordeon from '../../components/Accordeon/accordeon.component';
import ModalFilter from '../../components/modal-filter/modal-filter.component';
import ModalNewAmount from '../../components/modal-new-amount/modal-new-amount.component';
import ModalRegisterProducts from '../../components/modal-products/modal-products.components';
import Navbar from '../../components/navbar/navbar.component';

// Hooks
import { ProdutosContext } from '../../contexts/productsContext';
import { api } from '../../services/api';
import { IAccordeonProps } from '../../utils/models/accordion.model';

// Styles
import { RegisterProdutsStyled } from './register-products.styles';

// Assets
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const RegisterProducts: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [isNewAmountModalOpen, setIsNewAmountModalOpen] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<IAccordeonProps[]>([]);

  useEffect(() => {
    api.get('produtos')
      .then(resp => setProdutos(resp.data.data));
  }, []);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(!isLoginModalOpen);
  }

  function handleOpenFilterModal() {
    setIsFilterModalOpen(!isFilterModalOpen);
  }

  function handleOpenNewAmountModal() {
    setIsNewAmountModalOpen(!isNewAmountModalOpen);
  }

  return (
    <RegisterProdutsStyled>
      <ProdutosContext.Provider value={produtos}>
        <div className="header">

          <div className="home">
            <Navbar />

            <h1>Produtos</h1>
          </div>

          <ModalRegisterProducts isOpen={isLoginModalOpen} onRequestClose={handleOpenLoginModal}>
            <FontAwesomeIcon icon={faTimes} onClick={handleOpenLoginModal} />
          </ModalRegisterProducts>

          <ModalFilter isOpen={isFilterModalOpen} onRequestClose={handleOpenFilterModal}>
            <FontAwesomeIcon icon={faTimes} onClick={handleOpenFilterModal} />
          </ModalFilter>

          <ModalNewAmount isOpen={isNewAmountModalOpen} onRequestClose={handleOpenNewAmountModal}>
            <FontAwesomeIcon icon={faTimes} onClick={handleOpenNewAmountModal} />
          </ModalNewAmount> 

          <div className="buttons">
            <button className="register" onClick={handleOpenLoginModal}>Cadastrar</button>

            <button className="filter" onClick={handleOpenFilterModal}>Filtrar</button>

            <button className="new-amount" onClick={handleOpenNewAmountModal}>Nova quantidade</button>

          </div>
        </div>

        <span />

        <div className="wrapper">
          <div className="items">
            <p>Código</p>

            <p>Produto</p>

            <p>Quantidade</p>

            <p></p>
          </div>
        </div>

        <div>
          {produtos.map((item) => (
            <Accordeon
              key={item.id}
              id={item.id}
              productTitle={item.attributes.productTitle}
              quantity={item.attributes.quantity}
              shelfLife={new Intl.DateTimeFormat('pt-br').format(
                new Date(item.attributes.registerDate)
              )}
              price={new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(item.attributes.price)}
              valueSale={new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(item.attributes.valueSale)}
              minValueStock={item.attributes.minValueStock}
              providerName={item.attributes.providerName}
              registerDate={new Intl.DateTimeFormat('pt-br').format(
                new Date(item.attributes.registerDate)
              )}
            />
          ))}
        </div>
      </ProdutosContext.Provider>
    </RegisterProdutsStyled>
  );
}

export default RegisterProducts;