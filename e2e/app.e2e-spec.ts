import { HubuntuUiAngularPage } from './app.po';

describe('hubuntu-ui-angular App', () => {
  let page: HubuntuUiAngularPage;

  beforeEach(() => {
    page = new HubuntuUiAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
