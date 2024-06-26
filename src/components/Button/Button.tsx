import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?: "primary" | "secondary";
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledButton = styled.button<{
  disabled: boolean;
  theme: "primary" | "secondary";
  backgroundColor?: string;
}>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor :
    props.theme === "primary" ? "#007bff" : "#6c757d"};
  color: white;
  outline: none;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  transition: opacity 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor :
      props.theme === "primary" ? "#0056b3" : "#495057"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  theme = "primary",
  backgroundColor,
  disabled = false,
}) => {
  return (
    <StyledButton onClick={onClick} theme={theme} style={{ backgroundColor }} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
// import React from "react";
// import styled from "styled-components";

// interface ButtonProps {
//   text: string;
//   onClick?: () => void;
//   theme?: "primary" | "secondary";
//   disabled?: boolean;
// }

// const StyledButton = styled.button<{
//   disabled: boolean;
//   theme: "primary" | "secondary";
// }>`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   background-color: ${(props) =>
//     props.theme === "primary" ? "#007bff" : "#6c757d"};
//   color: white;
//   outline: none;
//   opacity: ${(props) => (props.disabled ? "0.5" : "1")};
//   transition: opacity 0.3s ease;

//   &:hover {
//     background-color: ${(props) =>
//       props.theme === "primary" ? "#0056b3" : "#495057"};
//   }
// `;

// const Button: React.FC<ButtonProps> = ({
//   text,
//   onClick,
//   theme = "primary",
//   disabled = false,
// }) => {
//   return (
//     <StyledButton onClick={onClick} theme={theme} disabled={disabled}>
//       {text}
//     </StyledButton>
//   );
// };

// export default Button;
