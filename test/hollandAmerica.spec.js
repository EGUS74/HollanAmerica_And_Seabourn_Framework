let homepageHA = require('../pages/HA/homepage.js');
let registerHA = require('../pages/HA/register.js');


describe('testing "www.hollandamerica.com"', () => {
  beforeAll(() => {
    homepageHA.angular();
  });

  it('should validate homepage', () => {
    homepageHA.get();
    homepageHA.hollandAmericaValidate();
  });

  it('Should click on the Login|Register button', () => {
    registerHA.clickBtn();
    registerHA.registerPageValidate();
  });

  it('Should register to the App', () => {
    registerHA.registration();
    registerHA.validateRegisteration();
  });

});