#language: pt
Funcionalidade: Login
  Contexto: Realizar login

  Cenário: Realizar login com sucesso   
  Dado que eu estou na tela login
  Quando eu informo email e senha e clico no botao logar
  Então devo ser direcionado para a home com usuario logado

  Cenário: Realizar login com usuário inválido   
  Dado que eu estou na tela login
  Quando eu informo email inválido botao logar
  Então devo visualizar mensagem E-mail ou senha incorretos