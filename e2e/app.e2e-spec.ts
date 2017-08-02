import { Angular4TodoAppPage } from './app.po';

describe('angular4-todo-app App', () => {
  let page: Angular4TodoAppPage;

  beforeEach(() => {
    page = new Angular4TodoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
