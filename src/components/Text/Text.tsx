import React from "react";
import styled from "styled-components";

interface TextProps {
  text: string;
  disabled?: boolean;
}

const StyledText = styled.p<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? "#ccc" : "inherit")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
`;

const Text: React.FC<TextProps> = ({ text, disabled = false }) => {
  return <StyledText disabled={disabled}>{text}</StyledText>;
};

export default Text;
