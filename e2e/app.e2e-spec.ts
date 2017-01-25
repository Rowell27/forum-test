import { AngularTestv2Page } from './app.po';

describe('angular-testv2 App', function() {
  let page: AngularTestv2Page;

  beforeEach(() => {
    page = new AngularTestv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
