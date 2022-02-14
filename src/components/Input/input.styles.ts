import styled from 'styled-components';

// utils
import InputProps from './input.model';

export const InputStyles = styled.input`
  display: flex;
  width: 100%;
  height: 58px;
  border-radius: 8px;
  background: white;
  background: ${(props: InputProps) => props.appearance};  
  color: #000;
  border: 1px solid #7D7D7D;
`;

