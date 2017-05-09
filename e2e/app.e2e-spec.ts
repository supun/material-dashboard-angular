import { MaterialDashBoardPage } from './app.po';

describe('material-dash-board App', () => {
  let page: MaterialDashBoardPage;

  beforeEach(() => {
    page = new MaterialDashBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
