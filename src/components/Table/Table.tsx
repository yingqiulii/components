// import React from "react";
// import styled from "styled-components";

// interface TableProps {
//   children: React.ReactNode;
//   disabled?: boolean;
// }

// const StyledTable = styled.table<{ disabled?: boolean }>`
//   width: 30%;
//   border-collapse: collapse;
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   opacity: ${(props) => (props.disabled ? 0.5 : 1)};
//   pointer-events: ${(props) => (props.disabled ? "none" : "auto")}; // 添加这行
// `;


// const Table: React.FC<TableProps> = ({ children, disabled }) => {
//   return <StyledTable disabled={disabled}>{children}</StyledTable>;
// };

// export default Table;
// import React from 'react';
// import styled from 'styled-components';

// interface TableProps {
//   categories: string[];
//   backgroundColor: string;
//   disabled?: boolean;
//   handleClickCategory: (category: string) => void;
//   onMouseEnter?: () => void;
// }

// const TableContainer = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const CategoryRow = styled.tr<{ backgroundColor: string; disabled?: boolean }>`
//   cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
//   background-color: ${(props) => props.backgroundColor};
// `;

// const CategoryCell = styled.td`
//   padding: 8px;
//   border-bottom: 1px solid #ccc;
// `;

// const Table: React.FC<TableProps> = ({ categories, backgroundColor, disabled, handleClickCategory, onMouseEnter }) => {
//   return (
//     <TableContainer>
//       <thead>
//         <tr>
//           <th>Categories</th>
//         </tr>
//       </thead>
//       <tbody>
//         {categories.map((category, index) => (
//           <CategoryRow
//             key={index}
//             backgroundColor={backgroundColor}
//             disabled={disabled}
//             onClick={() => handleClickCategory(category)}
//             onMouseEnter={onMouseEnter}
//           >
//             <CategoryCell>{category}</CategoryCell>
//           </CategoryRow>
//         ))}
//       </tbody>
//       <tfoot>
//         <tr>
//           <td>Total categories: {categories.length}</td>
//         </tr>
//       </tfoot>
//     </TableContainer>
//   );
// };

// export default Table;
import React from 'react';
import styled from 'styled-components';

interface TableProps {
  categories: string[];
  backgroundColor?: string;
  disabled?: boolean;
}

const TableContainer = styled.table<{ backgroundColor?: string }>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.backgroundColor || 'transparent'};
`;

const CategoryRow = styled.tr<{ backgroundColor?: string; disabled?: boolean }>`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  background-color: ${(props) => props.backgroundColor};
`;

const CategoryCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;

const Table: React.FC<TableProps> = ({
  categories,
  backgroundColor,
  disabled = false,
}) => {
  return (
    <TableContainer backgroundColor={backgroundColor}>
      <thead>
        <tr>
          <th>Table</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <CategoryRow
            key={index}
            backgroundColor={backgroundColor}
            disabled={disabled}
          >
            <CategoryCell>{category}</CategoryCell>
          </CategoryRow>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total: {categories.length}</td>
        </tr>
      </tfoot>
    </TableContainer>
  );
};

export default Table;

