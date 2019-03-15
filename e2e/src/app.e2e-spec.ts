import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('E2E测试Example', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('显示欢迎', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Hello World');
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   }));
  // });
});
