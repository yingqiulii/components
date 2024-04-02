import React from "react";
import styled from "styled-components";

interface TableProps {
  children: React.ReactNode;
  disabled?: boolean;
}

// const StyledTable = styled.table<{ disabled?: boolean }>`
//   width: 30%;
//   border-collapse: collapse;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
// `;
const StyledTable = styled.table<{ disabled?: boolean }>`
  width: 30%;
  border-collapse: collapse;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")}; // 添加这行
`;


const Table: React.FC<TableProps> = ({ children, disabled }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};

export default Table;
