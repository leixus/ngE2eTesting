import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('./login') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-login h1')).getText() as Promise<string>;
  }

  getInputElement(username, password) {
    return element.all(by.css('app-login input')).get(username).sendKeys(password);
  }

  getInputId(id, seedKeys) {
    return element(by.id(id)).sendKeys(seedKeys);
  }
}
