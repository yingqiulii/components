import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

interface StyledLabelProps {
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledLabel = styled.label<StyledLabelProps>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.disabled ? "#231232" : props.backgroundColor || "transparent")};
`;

const Label: React.FC<LabelProps> = ({ text, disabled = false, backgroundColor }) => {
  return (
    <StyledLabel disabled={disabled} backgroundColor={backgroundColor}>
      {text}
    </StyledLabel>
  );
};

export default Label;
