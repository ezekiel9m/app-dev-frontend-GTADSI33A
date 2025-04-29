import React, { useState } from "react";
import * as S from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  return (
    <S.Container>
      <S.Content>
        <S.H2>LOGIN</S.H2>
        <Input
          type="text"
          placeholder="Digite seu usuário"
          value={""}
          
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={""}
        />
          <Button text="Entrar" color="#0d6efd"></Button>
          <Button
            text="Cadastrar"
            color="#666"
          ></Button>
      </S.Content>
    </S.Container>
  );
};

export default Login;
