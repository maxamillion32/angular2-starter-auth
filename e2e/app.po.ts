export class WebsitePrototypePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('website-prototype-app h1')).getText();
  }
}
