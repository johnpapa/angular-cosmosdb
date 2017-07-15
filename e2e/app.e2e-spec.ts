import { AngularCosmosdbPage } from './app.po';

describe('angular-cosmosdb App', () => {
  let page: AngularCosmosdbPage;

  beforeEach(() => {
    page = new AngularCosmosdbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to toh!!');
  });
});
