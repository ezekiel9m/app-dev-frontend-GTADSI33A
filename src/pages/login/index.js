import React, { useState } from "react";
import * as S from "./styles";
import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = () =>{
    if(!email || !senha ){
      alert("Infrome email e senha.");
      return;
    }
    try{
      // criar objeto de dados 
      const payload = {
        email: email,
        senha: senha
      }
      // inserir dados no banco de dado do navegador 
      localStorage.setItem('usuario', JSON.stringify());

      // ler os dados do banco de dados 
      const localStorageUsuario = localStorage.getItem('usuario');

      // converter os dados para JSON
      const usuario = JSON.stringify(localStorageUsuario)

      // atualizar os ddos 
      usuario.email = "tech@tech.com.br";
      usuario.senha = "1234567889";

      // remover objeto do banco de dados 
      localStorage.removeItem('usuario');

      // inserir novamente 
      localStorage.setItem('usuario', JSON.stringify(payload));

      if(usuario.email === email && usuario.senha === senha){
        return;
      }
      else{
        setErro("Usuário ou senha inválido");
      }
    }catch(erro){
      setErro(`Erro ao fazer login. Tente novamente mais tarde. ${erro}`)
    }
  }

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
          }}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
        {erro && <S.Label>{erro}</S.Label>}
        <Button onClick={handleLogin} text="Entrar" color="#0d6efd"></Button>
        <Button text="Cadastrar" color="#666"></Button>
      </S.Content>
    </S.Container>
  );
};

export default Login;
