import { TinkerDrawerPage } from './app.po';

describe('tinker-drawer App', function() {
  let page: TinkerDrawerPage;

  beforeEach(() => {
    page = new TinkerDrawerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
