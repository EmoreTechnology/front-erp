import React, { createContext, FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { selectOptionMeasurement, selectOptionsCategories } from '../../utils/mocks/select';
import SelectComponent from '../select/select.component';

import { Container } from './modal-products.styles';

Modal.setAppElement("#root");

interface IProductsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export interface ProductsInput {
  data: {
    productTitle: string,
    quantity: number,
    shelfLife: any,
    price: number,
    valueSale: number,
    minValueStock: number,
    registerDate: any,
    providerName: string
  }
}
interface CreateProductsData {
  createProducts: (produtosInput: ProductsInput) => Promise<void>;
}

export const CreateProductsContext = createContext<CreateProductsData>({} as CreateProductsData);

const ModalRegisterProducts: React.FC<IProductsModalProps> = ({ isOpen, onRequestClose }) => {
  const [productTitle, setProductTitle] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  const [shelfLife, setShelfLife] = useState<any>(new Date());
  const [price, setPrice] = useState<number>(0);
  const [valueSale, setValueSale] = useState<number>(0);
  const [minValueStock, setMinValueStock] = useState<number>(0);
  const [registerDate] = useState<any>(new Date());
  const [providerName, setProviderName] = useState<string>('');

  async function createProducts(produtosInput: ProductsInput) {
    await api.post('produtos', produtosInput);

    window.location.reload();
  }

  async function handleCreateProducts(event: FormEvent) {
    event.preventDefault();

    await createProducts({
      data: {
        productTitle,
        shelfLife,
        price,
        quantity,
        valueSale,
        minValueStock,
        registerDate,
        providerName,
      }
    });

    setProductTitle('');
    setShelfLife(new Date().toLocaleDateString());
    setPrice(0);
    setQuantity(0);
    setValueSale(0);
    setMinValueStock(0);
    setProviderName('');
    onRequestClose();
  }

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
          maxWidth: '850px',
        }
      }}
    >
      <Container>
        <CreateProductsContext.Provider value={{ createProducts }}>
          <div>
            <h2>Cadastro</h2>

            <form onSubmit={handleCreateProducts}>
              <div className="left">
                <label htmlFor="">Nome do Produto:</label>
                <input
                  className="input"
                  type="text"
                  value={productTitle}
                  onChange={event => setProductTitle(event.target.value)}
                  />

                <label htmlFor="">Fornecedores:</label>
                <input
                  className="input"
                  type="text"
                  value={providerName} onChange={event => setProviderName(event.target.value)}
                />

                <label htmlFor="">Qtd.:</label>
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange={event => setQuantity(Number(event.target.value))}
                />

                {selectOptionsCategories.map((i) =>
                  <SelectComponent
                    className="select"
                    title={i.title}
                    type={i.type}
                    categories={i.categories}
                  />
                )}

                <label htmlFor="">Vlr. Produto:</label>
                <input
                  className="input"
                  value={price} onChange={event => setPrice(Number(event.target.value))}
                />
              </div>

              <div className="right">
                <label htmlFor="">Data de inclusão:</label>
                <p>{registerDate.toLocaleDateString('pt-br')}</p>

                {selectOptionMeasurement.map((i) =>
                  <SelectComponent
                    className="select"
                    title={i.title}
                    type={i.type}
                    measurement={i.measurement}
                  />
                )}

                <label htmlFor="">Validade:</label>
                <input
                  className="input"
                  type="date"
                  value={shelfLife} onChange={event => setShelfLife(event.target.value)}
                />

                <label htmlFor="">Vlr. Minimo Estoque:</label>
                <input
                  className="input"
                  value={minValueStock} onChange={event => setMinValueStock(Number(event.target.value))}
                />

                <label htmlFor="">Vlr. Venda:</label>
                <input
                  className="input"
                  value={valueSale} onChange={event => setValueSale(Number(event.target.value))}
                />

                <div className="buttons">
                  <button type='submit'>salvar</button>
                </div>
              </div>
            </form>
          </div>
        </CreateProductsContext.Provider>
      </Container>
    </Modal>
  );
}

export default ModalRegisterProducts;