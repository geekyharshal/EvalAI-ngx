import { AppPage } from './app.po';

describe('evalai App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getHeadingH1Text()).toEqual('Welcome to EvalAI|Home');
  });
});
