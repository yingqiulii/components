export interface TableProps {
  children: React.ReactNode;
  text: string;
  theme?: "default" | "primary" | "secondary";
  disabled?: boolean;
  backgroundColor?: string;
}
