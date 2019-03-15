import { browser, logging } from 'protractor';
import {LoginPage} from "./login.po";

describe('登录系统', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('表单测试', () => {
    page.navigateTo();
    // expect(page.getTitleText()).toEqual('Hello Form');

    page.getInputElement(0, 'leixu');
    page.getInputElement(1, 12345678);

    // 选择元素的方式有很多，但是测试是对同一个input只能用一次
    // page.getInputId('loginUserName', '小明');
    // page.getInputId('loginPassWord', '小明的密码');

  });

});
