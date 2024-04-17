
export const shouldSubmitForm = (isValid: boolean): boolean => {
  return isValid;
};


export const handleFormSubmission = (
  event: React.FormEvent<HTMLFormElement>,
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  isValid: boolean
): void => {
  event.preventDefault();
  if (shouldSubmitForm(isValid)) {
    onSubmit(event);
  }
};

export const getFormStyle = (disabled?: boolean, backgroundColor?: string): React.CSSProperties => {
  return {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "600px",
    width: "100%",
    backgroundColor: disabled ? '#CCCCCC' : (backgroundColor || '#FFFFFF'),
    pointerEvents: disabled ? 'none' : 'auto'
  };
};
