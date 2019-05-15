'use strict'
const EC = protractor.ExpectedConditions;

class LoginPage {
  constructor(){
      //mapeando elementos da página
    this.inputEmail = $("#email-input")
    this.inputPassword = $("#password-input");
    this.buttonContinuar = $("#login-button");
    this.elementMessageLoginError = $(".entrar-formError.--zeroLeft");
  }
 
  //método de logar cliente
  loginClient(email, pass){
    browser.wait(EC.visibilityOf(this.inputEmail), 15000);
    this.inputEmail.sendKeys(email);
    this.inputPassword.sendKeys(pass);
    return this.buttonContinuar.click();
  }
}

module.exports = LoginPage;
