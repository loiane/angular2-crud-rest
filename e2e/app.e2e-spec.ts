import { Angular2CrudRestPage } from './app.po';

describe('angular2-crud-rest App', function() {
  let page: Angular2CrudRestPage;

  beforeEach(() => {
    page = new Angular2CrudRestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
