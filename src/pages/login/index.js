import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !senha) {
      setErro("Informe usuário e senha.");
      return;
    }
    try {
      const usuarioString = localStorage.getItem("usuario");

      if (!usuarioString) {
        setErro("Usuário não encontrado.");
        return;
      }

      const usuario = JSON.parse(usuarioString); // Converter a string para objeto

      if (usuario.email === email && usuario.senha === senha) {
        alert("Login realizado com sucesso");
      } else {
        setErro("Usuário ou senha inválidos");
      }
    } catch (err) {
      console.error("Erro ao processar login:", err);
      setErro("Erro ao fazer login. Tente novamente.");
    }
  };

  
  return (
    <S.Container>
      <S.Content>
        <S.H2>LOGIN</S.H2>
        <Input
          type="text"
          placeholder="Digite seu usuário"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErro("");
          }}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            setErro("");
          }}
        />

        {erro && <S.LabelError>{erro}</S.LabelError>}

        <S.ButtonGroup>
          <Button onClick={handleLogin} text="Entrar" color="#0d6efd"></Button>
          <Button
            onClick={() => navigate("/cadastrar")}
            text="Cadastrar"
            color="#666"
          ></Button>
        </S.ButtonGroup>
      </S.Content>
    </S.Container>
  );
};

export default Login;
