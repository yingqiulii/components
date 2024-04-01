// import React, { ReactNode } from 'react';
// import styled, { css } from 'styled-components';

// interface TableHeaderProps {
//   children: ReactNode;
//   disabled?: boolean;
// }

// const StyledTableHeader = styled.thead<{ disabled?: boolean }>`
//   background-color: #234523;
//   ${(props) =>
//     props.disabled &&
//     css`
//       opacity: 0.5;
//     `}
// `;

// const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled }) => {
//   return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>;
// };

// export default TableHeader;
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface TableHeaderProps {
  children: ReactNode;
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledTableHeader = styled.thead<{ disabled?: boolean; backgroundColor?: string }>`
background-color: ${props => props.backgroundColor || '#234523'};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

const TableHeader: React.FC<TableHeaderProps> = ({ children, disabled, backgroundColor }) => {
  return <StyledTableHeader disabled={disabled} backgroundColor={backgroundColor}>{children}</StyledTableHeader>;
};


export default TableHeader;
