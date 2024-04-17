import React from "react";
import styled from "styled-components";

interface TextProps {
  disabled?: boolean;
  largeFont?: boolean;
  backgroundColor?: string;
}

const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? "#ccc" : "inherit")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  font-size: ${(props) => (props.largeFont ? "20px" : "inherit")};
  background-color: ${(props) => props.backgroundColor || "transparent"};
`;

const Text: React.FC<TextProps & { children: React.ReactNode }> = ({
  children,
  disabled = false,
  largeFont = false,
  backgroundColor
}) => {
  return (
    <StyledText
      disabled={disabled}
      largeFont={largeFont}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledText>
  );
};

export default Text;


// import React from "react";
// import styled from "styled-components";

// interface TextProps {
//   text: string;
//   disabled?: boolean;
// }

// const StyledText = styled.p<{ disabled?: boolean }>`
//   color: ${(props) => (props.disabled ? "#ccc" : "inherit")};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
// `;

// const Text: React.FC<TextProps> = ({ text, disabled = false }) => {
//   return <StyledText disabled={disabled}>{text}</StyledText>;
// };

// export default Text;
