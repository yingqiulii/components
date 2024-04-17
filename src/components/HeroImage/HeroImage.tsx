import React from "react";
import styled from "styled-components";
// @ts-ignore
import imgSrc from "./1.jpg";

interface HeroImageProps {
  imageUrl: string;
  altText: string;
  disabled?: boolean;
  backgroundColor?: string; // 新增背景颜色属性
}

const Container = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  background-color: ${(props) => props.backgroundColor || "transparent"}; // 设置背景颜色
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${(props) => (props.disabled ? "0.5" : "0")});
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Text = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${(props) => (props.disabled ? "#aaa" : "white")};
  text-align: center;
  font-size: 24px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  altText,
  disabled = false,
  backgroundColor,
}) => (
  <Container disabled={disabled} backgroundColor={backgroundColor}>
    <Image src={imgSrc} alt={altText} />
    <Overlay disabled={disabled} />
    <Text disabled={disabled}>{altText}</Text>
  </Container>
);

export default HeroImage;

// import React from "react";
// import styled from "styled-components";
// // @ts-ignore
// import imgSrc from "./1.jpg";

// interface HeroImageProps {
//   imageUrl: string;
//   altText: string;
//   disabled?: boolean;
// }

// const Container = styled.div<{ disabled?: boolean }>`
//   position: relative;
//   width: 100%;
//   height: 300px;
//   overflow: hidden;
//   opacity: ${(props) => (props.disabled ? "0.5" : "1")};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const Overlay = styled.div<{ disabled?: boolean }>`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, ${(props) => (props.disabled ? "0.5" : "0")});
//   opacity: ${(props) => (props.disabled ? "0.5" : "1")};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
// `;

// const Text = styled.div<{ disabled?: boolean }>`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: ${(props) => (props.disabled ? "#aaa" : "white")};
//   text-align: center;
//   font-size: 24px;
//   opacity: ${(props) => (props.disabled ? "0.5" : "1")};
//   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
// `;

// const HeroImage: React.FC<HeroImageProps> = ({
//   imageUrl,
//   altText,
//   disabled = false,
// }) => (
//   <Container disabled={disabled}>
//     <Image src={imgSrc} alt={altText} />
//     <Overlay disabled={disabled} />
//     <Text disabled={disabled}>{altText}</Text>
//   </Container>
// );

// export default HeroImage;