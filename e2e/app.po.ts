import { browser, by, element } from 'protractor';

export class AngularCosmosdbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('toh-root h1')).getText();
  }
}
