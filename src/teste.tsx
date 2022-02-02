import React from 'react';

// import { Container } from './styles';

interface IText {
  title?: string, 
}

const Teste: React.FC<IText> = ({title}) => {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

export default Teste;