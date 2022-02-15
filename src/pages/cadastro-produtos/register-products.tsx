// Dendencies
import React, { useEffect, useState } from 'react';
import Accordeon from '../../components/Accordeon/accordeon.component';
import ModalRegisterProducts from '../../components/modal-products/modal-products.components';

// Hooks
import { ProdutosContext } from '../../contexts/productsContext';
import { api } from '../../services/api';
import { IAccordeonProps } from '../../utils/models/accordion.model';

// Styles
import { RegisterProdutsStyled } from './register-products.styles';

const RegisterProducts: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [produtos, setProdutos] = useState<IAccordeonProps[]>([]);

  useEffect(() => {
    api.get('produtos')
      .then(resp => setProdutos(resp.data.data));
  }, []);

  function handleOpenLoginModal() {
    setIsLoginModalOpen(!isLoginModalOpen);
  }

  const handleOpenFilterModal = () => {
    console.log('clicou no filtro');
  }
 
  return (
    <RegisterProdutsStyled>
      <ProdutosContext.Provider value={produtos}>
        <div className="header">
          <p>Register Products</p>

          <ModalRegisterProducts isOpen={isLoginModalOpen} onRequestClose={handleOpenLoginModal} />

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
              description={item.attributes.description}
              price={new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(item.attributes.price)}
              valueSale={new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(item.attributes.valueSale)}
              minValueStock={item.attributes.minValueStock}
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