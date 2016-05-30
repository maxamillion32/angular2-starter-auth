import { WebsitePrototypePage } from './app.po';

describe('website-prototype App', function() {
  let page: WebsitePrototypePage;

  beforeEach(() => {
    page = new WebsitePrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('website-prototype works!');
  });
});
