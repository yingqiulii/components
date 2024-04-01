import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px 0;
  width: calc(100% - 32px);

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;

type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  name: string;
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  disabled = false,
}) => {
  return <StyledInput placeholder={placeholder} disabled={disabled} />;
};
