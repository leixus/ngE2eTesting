import { PokemonPage } from './pokemon.po';
import { browser } from 'protractor';

describe('宠物小精灵Example', () => {
  let page: PokemonPage;

  beforeEach(() => {
    page = new PokemonPage();
  });

  it('宠物小精灵列表', () => {
    page.navigateTo();
    expect(page.getPokemonCardElements().count()).toBe(151);
  });

  it('打开查看特定的宠物小精灵', () => {
    page.navigateTo();
    // 发生点击事件
    page.getFirstPokemonCardElement().click();
    // 不知道toBeTruthy()是什么意思？
    expect(page.getOpenModalElement()).toBeTruthy();
    // 测试#1的文本
    expect(page.getOpenModalHeadingElement().getText()).toBe('Bulbasaur #1');
  });

  it('打开并允许箭头键在宠物小精灵之间导航', () => {
    page.navigateTo();
    page.getFirstPokemonCardElement().click();
    page.selectNextKey();

    expect(page.getOpenModalHeadingElement().getText()).toBe('Ivysaur #2');

    page.selectPrevKey();
    page.selectPrevKey();
    expect(page.getOpenModalHeadingElement().getText()).toBe('Mew #151');
  });

});
