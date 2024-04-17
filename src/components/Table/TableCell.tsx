import React from "react";
import styled from "styled-components";

interface TableCellProps {
  children: React.ReactNode;
  disabled?: boolean;
}

const StyledTableCell = styled.td<{ disabled?: boolean }>`
  padding: 10px;
  border: 1px solid #ddd;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const TableCell: React.FC<TableCellProps> = ({ children, disabled }) => {
  return <StyledTableCell disabled={disabled}>{children}</StyledTableCell>;
};

export default TableCell;
