import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input<{ backgroundColor?: string }>`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 5px 0;
  width: calc(100% - 32px);
  background-color: ${(props) => props.backgroundColor || "transparent"}; // 设置背景颜色
  &:hover {
    border-color: blue;
  }
  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;

export type InputProps = {
  placeholder?: string;
  disabled?: boolean;
  name: string;
  type?: string;
  onChange?: (value: string) => void;
  validate?: (value: string) => boolean;
  'data-testid'?: string;
  backgroundColor?: string; // 新增背景颜色属性
};


export const Input: React.FC<InputProps> = ({
  placeholder,
  disabled = false,
  type = "text",
  onChange,
  validate,
  'data-testid': testId,
  backgroundColor,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (validate && !validate(value)) {
      console.error("Invalid input:", value);
    } else {
      onChange && onChange(value);
    }
  };

  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleChange}
      data-testid={testId}
      backgroundColor={backgroundColor}
    />
  );
};

// import React from 'react';
// import styled from 'styled-components';

// const StyledInput = styled.input`
//   padding: 8px 16px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin: 5px 0;
//   width: calc(100% - 32px);
//   &:hover {
//     border-color: blue;
//   }
//   &:disabled {
//     background-color: #eee;
//     cursor: not-allowed;
//   }
// `;

// export type InputProps = {
//   placeholder?: string;
//   disabled?: boolean;
//   name: string;
//   type?: string;
//   onChange?: (value: string) => void;
//   validate?: (value: string) => boolean;
//   'data-testid'?: string;
// };


// export const Input: React.FC<InputProps> = ({
//   placeholder,
//   disabled = false,
//   type = "text",
//   onChange,
//   validate,
//   'data-testid': testId,
// }) => {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     if (validate && !validate(value)) {
//       console.error("Invalid input:", value);
//     } else {
//       onChange && onChange(value);
//     }
//   };

//   return (
//     <StyledInput
//       type={type}
//       placeholder={placeholder}
//       disabled={disabled}
//       onChange={handleChange}
//       data-testid={testId}
//     />
//   );
// };
