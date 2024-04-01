import React from "react";
import { LabelProps } from "./Label.types";

const Label: React.FC<LabelProps> = ({ text, disabled = false }) => {
  const labelClass = `label ${disabled ? 'disabled' : ''}`;
  // const labelStyle = disabled ? { cursor: 'not-allowed' } : { cursor: 'pointer' };
  const labelStyle = disabled ? { cursor: 'not-allowed', backgroundColor: '#231232' } : { cursor: 'pointer', backgroundColor: 'transparent' };

  return (
    <label className={labelClass} style={labelStyle}>
      {text}
    </label>
  );
};

export default Label;
