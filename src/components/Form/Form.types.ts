export interface FormProps {
  disabled?: boolean;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}
