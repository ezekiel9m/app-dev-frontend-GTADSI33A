import React from "react";
import * as S from "./styles";

const Input = ({ name, text, type, placeholder, value, onChange }) => {
  return (
    <>
      <S.Input
        name={name}
        text={text}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
