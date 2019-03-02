import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('E2E测试Example', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('显示欢迎信息h2', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('Welcome to angular-io-e2e!');
  // });
  //
  // it('显示欢迎信息h1', () => {
  //   page.navigateTo();
  //   expect(page.getTitleTextH1()).toEqual('欢迎来到angular-e2e测试');
  // });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   }));
  // });
});
