export function validate_name(text: string){
  const regex= /^[a-zA-Z0-9\s.,!?]{1,30}$/;
  return regex.test(text)
};

export function validate_message(text: string){
  const regex= /^[a-zA-Z0-9\s.,!?]{1,300}$/;
  return regex.test(text)
};



export function validate_email(text: string){
  const regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(text)
};

export function getBackgroundColor(isValid: boolean): string {
  return isValid ? 'green' : 'red';
}

