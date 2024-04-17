import React, { useState } from "react";
import styled from "styled-components";

interface RadioProps {
  label: string;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  'data-testid'?: string;
  backgroundColor?: string;
}

const StyledLabel = styled.label<{ disabled?: boolean; backgroundColor?: string }>`
  display: inline-block;
  position: relative;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "transparent" : props.backgroundColor)};
`;

const Input = styled.input`
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Radio: React.FC<RadioProps> = ({
  label,
  onChange,
  disabled = false,
  'data-testid': testId,
  backgroundColor,
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    if (!disabled) {
      const newChecked = !checked;
      setChecked(newChecked);
      if (onChange) {
        onChange(newChecked);
      }
    }
  };

  return (
    <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>
      <Input
        type="radio"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        data-testid={testId}
      />
      {label}
    </StyledLabel>
  );
};

export default Radio;
