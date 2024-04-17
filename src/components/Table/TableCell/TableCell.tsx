import React from "react";
import styled from "styled-components";

interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledTableCell = styled.td<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 10px;
  border: 1px solid #ddd;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  background-color: ${(props) => props.backgroundColor || "transparent"};
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledTableCell disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableCell>;
};

export default TableCell;
