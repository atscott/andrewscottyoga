import { AndrewscottyogaPage } from './app.po';

describe('andrewscottyoga App', () => {
  let page: AndrewscottyogaPage;

  beforeEach(() => {
    page = new AndrewscottyogaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
