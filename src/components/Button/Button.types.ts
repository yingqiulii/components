
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  theme?: "primary" | "secondary";
  backgroundColor?: string;
  disabled?: boolean;
}
