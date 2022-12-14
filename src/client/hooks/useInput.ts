import React, { useState } from "react";
import useValidation, { validations } from "./useValidation";

export interface IUseInput {
  isValid: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useInput = (validations: validations) => {
  const [value, setValue] = useState("");
  //   const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  //   const onBlur = (e: React.FocusEvent) => {
  //     setDirty(true);
  //   };

  return {
    value,
    onChange,
    // onBlur,
    // isDirty,
    ...valid,
  };
};

export default useInput;
