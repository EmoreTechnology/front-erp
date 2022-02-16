// Dependencies
import React from 'react';
import Modal from 'react-modal';

// Styles
import { Container } from './modal-filter.styles';

// Components
import ButtonComponent from '../Button/buton';

interface IFilterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalFilter: React.FC<IFilterModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      className={"react-modal-content"}
      overlayClassName={"ReactModalPortal"}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7',
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          maxWidth: '506px',
        }
      }}
    >
      <Container>
        <div>
          <h2>Filtrar</h2>

          <div className="content">
            <label htmlFor="">Código:</label>

            <input type="number" ></input>

            <label htmlFor="">Produto:</label>

            <input type="text" ></input>

            <div className="category">
              <label htmlFor="">Categorias:</label>

              <div className="section">
                <ButtonComponent>Bebidas</ButtonComponent>

                <ButtonComponent>Alimentos</ButtonComponent>
              </div>
            </div>
            <div className="time-course">

              <label htmlFor="">Período:</label>

              <div className="section">

                <input type="date" />

                <input type="date" />
              </div>
            </div>
            <div className="buttons">

              <ButtonComponent>Buscar</ButtonComponent>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  );
}

export default ModalFilter;