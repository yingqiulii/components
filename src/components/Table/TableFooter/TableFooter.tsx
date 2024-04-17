import React, { ReactNode } from "react";
import styled from "styled-components";

interface TableFooterProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string; // 新增 backgroundColor 属性
}

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => props.backgroundColor || "#f0f0f0"}; // 使用传入的 backgroundColor 或默认值
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const TableFooter: React.FC<TableFooterProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledTableFooter disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableFooter>;
};

export default TableFooter;
