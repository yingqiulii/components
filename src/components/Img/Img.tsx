import React from "react";
import styled from "styled-components";
// @ts-ignore
import imgSrc from "./1.jpg";

interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  disabled?: boolean;
  backgroundColor?: string; // 新增背景颜色属性
}

const StyledImg = styled.img<{ disabled?: boolean; backgroundColor?: string }>`
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  max-width: 30%;
  height: auto;
  background-color: ${(props) => props.backgroundColor || "transparent"}; // 设置背景颜色
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  width,
  height,
  disabled = false,
  backgroundColor,
}) => {
  return (
    <StyledImg
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      disabled={disabled}
      backgroundColor={backgroundColor}
    />
  );
};

export default Img;

// import React from "react";
// import styled from "styled-components";
// // @ts-ignore
// import imgSrc from "./1.jpg";

// interface ImgProps {
//   src: string;
//   alt: string;
//   width?: string;
//   height?: string;
//   disabled?: boolean;
// }

// const StyledImg = styled.img<{ disabled?: boolean }>`
//   opacity: ${(props) => (props.disabled ? "0.5" : "1")};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
//   max-width: 30%;
//   height: auto;
// `;

// const Img: React.FC<ImgProps> = ({
//   src,
//   alt,
//   width,
//   height,
//   disabled = false,
// }) => {
//   return (
//     <StyledImg
//       src={imgSrc}
//       alt={alt}
//       width={width}
//       height={height}
//       disabled={disabled}
//     />
//   );
// };

// export default Img;
