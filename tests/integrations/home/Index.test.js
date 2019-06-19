describe('GET  "/"', ()=> {

  beforeEach(()=> {
    browser.get('/')
  });

  it('should check for title', () => {
    expect(browser.getTitle()).toEqual('Hello fillet');
  });

   it('should have the "Hello" text', ()=> {
    browser.wait(()=> {
      return browser.isElementPresent(By.className("welcome-view"));
    }, 2000);

    let welcomeView = browser.findElement(By.className("welcome-view"));

    expect(welcomeView.getText()).toMatch('Hello fillet')
  });

});

