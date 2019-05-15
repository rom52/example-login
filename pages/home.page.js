'use strict'
const EC = protractor.ExpectedConditions;

class HomePage {
  constructor(){
      //mapeando elementos da página
    this.elementOlaMinhaConta = $("#h_user");
    this.buttonEntrar = $("#h_usr-signin");
    this.elementNomeUsuarioLogado = $(".usr-nick");
  }

  visit(){
    browser.get('');
  }
//método para clicar no elemento
clickElementLogin(){
    browser.wait(EC.visibilityOf(this.elementOlaMinhaConta), 15000);
    this.elementOlaMinhaConta.click();
    browser.wait(EC.visibilityOf(this.buttonEntrar), 3000);
    this.buttonEntrar.click();
}
//método para validar usuário logado
validateUserLogged(nameUser){
    browser.wait(EC.visibilityOf(this.elementNomeUsuarioLogado), 15000);
    expect(this.elementNomeUsuarioLogado.getText()).to.eventually.contain(nameUser);   
}

}
module.exports = HomePage;
