import { RfpPage } from './app.po';

describe('rfp App', () => {
  let page: RfpPage;

  beforeEach(() => {
    page = new RfpPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
