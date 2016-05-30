import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WebsitePrototypeAppComponent } from '../app/website-prototype.component';

beforeEachProviders(() => [WebsitePrototypeAppComponent]);

describe('App: WebsitePrototype', () => {
  it('should create the app',
      inject([WebsitePrototypeAppComponent], (app: WebsitePrototypeAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'website-prototype works!\'',
      inject([WebsitePrototypeAppComponent], (app: WebsitePrototypeAppComponent) => {
    expect(app.title).toEqual('website-prototype works!');
  }));
});
