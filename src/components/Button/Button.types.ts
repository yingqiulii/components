// export interface ButtonProps {
//   testIdPrefix: string;
//   label: string;
//   onClick?: () => void;
//   theme?: "primary" | "secondary";
//   disabled?: boolean;
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?: 'primary' | 'secondary';
  disabled?: boolean;
}

