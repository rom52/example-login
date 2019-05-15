'use strict'
//importando as libs necessárias
let chai = require('chai');
let chaiAsPromised =require('chai-as-promised');
//importando caminho das classes pages objects
const HomePage = require('../pages/home.page.js');
const LoginPage = require('../pages/login.page.js');
//importando classe de massa e de wait
const mass = require('../utils/dataMass.js');
const EC = protractor.ExpectedConditions;

chai.use(chaiAsPromised);
const expect = chai.expect;

module.exports = function(){
//Instanciando classes page objects
const homePage = new HomePage();
const loginPage = new LoginPage();

//metodos regex que a classe de feature vai ler

  this.Given(/^que eu estou na tela login$/, {timeout: 60 * 1000}, function () {
    homePage.visit();
    homePage.clickElementLogin();
  });

  this.When(/^eu informo email e senha e clico no botao logar$/, {timeout: 60 * 1000}, function (callback) {
    loginPage.loginClient(mass.loginMass.email, mass.loginMass.password).then(callback);
  });

  this.When(/^eu informo email inválido botao logar$/, {timeout: 60 * 1000}, function (callback) {
    loginPage.loginClient("testeabcd@testefake.com.br", "123456").then(callback);
  });

  this.Then(/^devo ser direcionado para a home com usuario logado$/,{timeout: 60 * 1000}, function (callback) {
    browser.wait(EC.visibilityOf(homePage.elementNomeUsuarioLogado), 50000);
    expect(homePage.elementNomeUsuarioLogado.getText()).to.eventually.contain(mass.loginMass.name).and.notify(callback);
  });

  this.Then(/^devo visualizar mensagem E\-mail ou senha incorretos$/, {timeout: 60 * 1000},  function (callback) {
    browser.wait(EC.visibilityOf(loginPage.elementMessageLoginError), 25000);
    expect(loginPage.elementMessageLoginError.getText()).to.eventually.contain("E-mail ou senha incorretos").and.notify(callback);
  });

};
