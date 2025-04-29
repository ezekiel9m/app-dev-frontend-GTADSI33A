import React from "react";
import * as S from "./styles";

const Button = ({ type = "button", onClick, text, color }) => {
  return (
    <S.Button color={color} onClick={onClick} type={type}>
      {text}
    </S.Button>
  );
};

export default Button;
