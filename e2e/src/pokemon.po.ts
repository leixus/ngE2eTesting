import { browser, element, by, Key } from 'protractor';

export class PokemonPage {
  navigateTo() {
    return browser.get('/pokemon');
  }

  // 获取到所有类名为card--media的元素
  getPokemonCardElements() {
    return element.all(by.css('.card--media'));
  }

  getFirstPokemonCardElement() {
    return element(by.css('.card--media'));
  }

  getOpenModalElement() {
    return element(by.tagName('ngx-modal'));
  }
  getOpenModalHeadingElement() {
    return element(by.css('ngx-modal h1'));
  }

  selectNextKey() {
    // sendKeys input键入
    browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
  }

  selectPrevKey() {
    browser.actions().sendKeys(Key.ARROW_LEFT).perform();
  }

}
