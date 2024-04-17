import React from "react";
import styled from "styled-components";

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
  backgroundColor?: string; // Optional background color property
};

export const Form = ({ children, onSubmit, backgroundColor }: FormProps) => {
  return (
    <form
      style={{ ...FormStyle, backgroundColor }} // Apply backgroundColor dynamically
      onSubmit={onSubmit}
      data-testid="my-form"
    >
      {children}
    </form>
  );
};

// import React from "react";
// import styled from "styled-components";

// const FormStyle: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "1rem",
//   maxWidth: "600px",
//   width: "100%",
// };

// type FormProps = {
//   children: React.ReactNode;
//   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
//   backgroundColor?: string; // Optional background color property
// };

// export const Form = ({ children, onSubmit, backgroundColor }: FormProps) => {
//   return (
//     <form
//       style={{ ...FormStyle, backgroundColor }} // Apply backgroundColor dynamically
//       onSubmit={onSubmit}
//       data-testid="my-form"
//     >
//       {children}
//     </form>
//   );
// };

// import React from "react";
// import styled from "styled-components";

// const FormStyle: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "1rem",
//   maxWidth: "600px",
//   width: "100%",
// };

// type FormProps = {
//   children: React.ReactNode;
//   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
// };

// export const Form = ({ children, onSubmit }: FormProps) => {
//   return (
//     <form style={FormStyle} onSubmit={onSubmit} data-testid="my-form">
//       {children}
//     </form>
//   );
// };

