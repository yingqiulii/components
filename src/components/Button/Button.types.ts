
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?: "primary" | "secondary";
  disabled?: boolean;
}
