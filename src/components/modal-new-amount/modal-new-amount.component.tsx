import React from 'react';
import Modal from 'react-modal';
import ButtonComponent from '../Button/buton';

import { Container } from './modal-new-amount.styles';

interface INewAmountModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const ModalNewAmount: React.FC<INewAmountModalProps> = ({ isOpen, onRequestClose }) => {
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
          <h2>Adicionar nova quantidade</h2>

          <div className="content">
            <label htmlFor="">Código:</label>

            <input type="number" ></input>

            <label htmlFor="">Produto:</label>

            <input type="text" ></input>

            <label htmlFor="">Nova quantidade</label>

            <input type="number" ></input>

            <div className="buttons">
              <ButtonComponent>Buscar</ButtonComponent>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  );
}

export default ModalNewAmount;