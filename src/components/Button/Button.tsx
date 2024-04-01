// import React from "react";
// import { ButtonProps } from "./Button.types";

// const Button: React.FC<ButtonProps> = ({ testIdPrefix, label, onClick, theme = "primary", disabled = false }) => {
//   return (
//     <button
//       className={`button ${theme}`}
//       onClick={onClick}
//       disabled={disabled}
//       data-testid={`${testIdPrefix}-button`}
//     >
//       {label}
//     </button>
//   );
// };

// export default Button;
// Button.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?: 'primary' | 'secondary';
  disabled?: boolean;
}

const StyledButton = styled.button<{ disabled: boolean; theme: 'primary' | 'secondary' }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => (props.theme === 'primary' ? '#007bff' : '#6c757d')};
  color: white;
  outline: none;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  transition: opacity 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.theme === 'primary' ? '#0056b3' : '#495057')};
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, theme = 'primary', disabled = false }) => {
  return (
    <StyledButton onClick={onClick} theme={theme} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
