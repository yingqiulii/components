import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import cardImage from './1.jpg';

interface CardProps {
  title: string;
  content: string;
  disabled?: boolean;
  imageUrl?: string;
}

const CardContainer = styled.div<{ disabled?: boolean }>`
  background-color: ${props => (props.disabled ? '#eee' : '#fff')};
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  width: 20%;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px 8px 0 0;
  margin: 0 auto;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Card: React.FC<CardProps> = ({ title, content, disabled = false, imageUrl }) => {
  return (
    <CardContainer data-testid="card" disabled={disabled}>
      <Image src={cardImage} alt="Card Image" />
      <CardContent>
        <h3>{title}</h3>
        <p>{content}</p>
      </CardContent>
    </CardContainer>
  );
};
// const Card: React.FC<CardProps> = ({ title, content, imageUrl, disabled }) => {
//   return (
//     <div>
//       <img src={imageUrl} alt="Card Image" />
//       <div>
//         {disabled ? (
//           <>
//             <h2>Disabled Card</h2>
//             <p>This card is disabled</p>
//           </>
//         ) : (
//           <>
//             <h2>{title}</h2>
//             <p>{content}</p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
export default Card;
