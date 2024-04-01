// import React from 'react';

// const FormStyle: React.CSSProperties = {
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '1rem',
//   maxWidth: '600px',
//   width: '100%',
// };

// type FormProps = {
//   children: React.ReactNode;
//   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// };

// export const Form = ({ children, onSubmit }: FormProps) => {
//   return (
//     <form style={FormStyle} onSubmit={onSubmit}>
//       {children}
//     </form>
//   );
// };
import React from "react";

const FormStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  maxWidth: "600px",
  width: "100%",
};

type FormProps = {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form style={FormStyle} onSubmit={onSubmit}>
      {children}
    </form>
  );
};
