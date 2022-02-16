// Dendencies
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import Accordeon from '../../components/Accordeon/accordeon.component';
import ModalFilter from '../../components/filter/modal-filter.component';
import ModalRegisterProducts from '../../components/modal-products/modal-products.components';
import Navbar from '../../components/navbar/navbar.component';

// Hooks
import { ProdutosContext } from '../../contexts/productsContext';
import { api } from '../../services/api';
import { IAccordeonProps } from '../../utils/models/accordion.model';

// Styles
import { RegisterProdutsStyled } from './register-products.styles';

// Assets
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const RegisterProducts: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
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
 
  return (
    <RegisterProdutsStyled>
      <ProdutosContext.Provider value={produtos}>
        <div className="header">

          <Navbar />

          <h1>Produtos</h1>

          <ModalRegisterProducts isOpen={isLoginModalOpen} onRequestClose={handleOpenLoginModal} />
          <ModalFilter isOpen={isFilterModalOpen} onRequestClose={handleOpenFilterModal}></ModalFilter>
          <div className="buttons">
            <button className="register" onClick={handleOpenLoginModal}>Cadastrar</button>

            <button className="filter" onClick={handleOpenFilterModal}>Filtrar</button>
          </div>
        </div>

        <span />

        <div className="wrapper">
          <div className="items">
            <p>Código</p>

            <p>Produto</p>

            <p>Quantidade</p>

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