let homepageSB = require('../pages/SB/homepage.js');
let registerSB = require('../pages/SB/register.js');


describe('Testing "www.seabourn.com"', () => {
  beforeAll(() => {
    homepageSB.angular();
  });

  it('should validate homepage', () => {
    homepageSB.get();
    homepageSB.seabournValidate();
  });

  it('Should click on the Login|Register button', () => {
    registerSB.clickBtn();
    registerSB.registerPageValidate();
  });

  it('Should register to the App', () => {
    registerSB.registration();
    registerSB.validateRegisteration();
  });

});
