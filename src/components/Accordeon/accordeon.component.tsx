// Dependencies
import React, { useState } from 'react';

// Styles
import { Container } from './accordeon.styles';

// Utils
import { IAccordeonProps } from '../../utils/models/accordion.model';

const Accordeon: React.FC<IAccordeonProps> = ({ price, shelfLife, id, productTitle, quantity, valueSale, minValueStock, registerDate, providerName }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <div className="accordion-item">
        <div
          className={isActive ? `accordion-title-active` : "accordion-title"}
          onClick={() => setIsActive(!isActive)}
        >
          <p>{id}</p>

          <p>{productTitle}</p>

          <p>{quantity}</p>

          <p>{isActive ? "-" : "+"}</p>
        </div>

        {isActive &&
          <div className="accordion-content">

            <p>Data: {registerDate}</p>

            <p>Fornecedor: {providerName}</p>

            <p>Validade: {shelfLife}</p>

            <p>Preço: {price}</p>

            <p>Valor venda: {valueSale}</p>

            <p>Quantida mín estoque: {minValueStock}</p>
          </div>
        }
      </div>
    </Container>
  );
}

export default Accordeon;