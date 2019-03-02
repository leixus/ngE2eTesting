import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    // return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  getTitleTextH1() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
}
