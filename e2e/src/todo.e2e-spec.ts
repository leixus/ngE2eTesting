import { browser, element, by, Key } from 'protractor';

// describe('angularjs主页待办事项列表', () => {
//   it('应该加一个待办事项', () => {
//     browser.get('https://angularjs.org');
//
//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();
//
//     const todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     const completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });

describe('Protractor一个Demo App', () => {
  it('获取标题', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('添加1和2', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(4);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).toEqual('5'); // This is wrong!
  });

  // 优化
  // const firstNumber = element(by.model('first'));
  // const secondNumber = element(by.model('second'));
  // const goButton = element(by.id('gobutton'));
  // const latestResult = element(by.binding('latest'));
  //
  // beforeEach(() => {
  //   browser.get('http://juliemr.github.io/protractor-demo/');
  // });
  //
  // it('测试标题', () => {
  //   expect(browser.getTitle()).toEqual('Super Calculator');
  // });
  //
  // it('测试默认运算是否正确', () => {
  //   firstNumber.sendKeys(1);
  //   secondNumber.sendKeys(2);
  //
  //   goButton.click();
  //
  //   expect(latestResult.getText()).toEqual('3');
  // });
  //
  // // it('4+6', () => {
  // //   // Fill this in.
  // //   expect(latestResult.getText()).toEqual('10');
  // // });
  //
  // it('应该从firstNumber中读取值', () => {
  //   firstNumber.sendKeys(1);
  //   expect(firstNumber.getAttribute('value')).toEqual('1');
  // });

  // const firstNumber = element(by.model('first'));
  // const secondNumber = element(by.model('second'));
  // const goButton = element(by.id('gobutton'));
  // const latestResult = element(by.binding('latest'));
  // // by后面都是指令的的name， repeat循环
  // const history = element.all(by.repeater('result in memory'));
  //
  // function add(a, b) {
  //   firstNumber.sendKeys(a);
  //   secondNumber.sendKeys(b);
  //   goButton.click();
  // }
  //
  // beforeEach(() => {
  //   browser.get('http://juliemr.github.io/protractor-demo/');
  // });
  //
  // it('进项了几次算法', () => {
  //   add(1, 2);
  //   add(3, 4);
  //
  //   expect(history.count()).toEqual(2);
  //
  //   add(5, 6);
  //
  //   expect(history.count()).toEqual(3); // This is wrong!
  //
  //   // 第一次算法
  //   expect(history.last().getText()).toContain('1 + 2');
  //   // expect(history.first().getText()).toContain('foo'); // This is wrong!
  // });


});
