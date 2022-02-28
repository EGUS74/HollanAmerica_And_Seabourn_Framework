let loginSB = function () {
    let creds = require('../../testData/cred.js');
    let btn = element(by.id("GlobalHeaderLoginWidgetDropDownButton"));
    let registerBtn = element(by.css('#GlobalHeaderLoginContainer > div > p > a'));
    let firstName = element(by.id('firstName'));
    let lastName = element(by.id('lastName'));
    let month = element(by.css('#month > option:nth-child(9)'));
    // let month = element(by.cssContainingText('August'));
    let birthDay = element(by.id('date'));
    let birthYear = element(by.id('year'));
    let country = element(by.css('#country > option:nth-child(191)'));
    // let country = element(by.cssContainingText('Senegal'));
    let postalCode = element(by.id('postalCode'));
    let email = element(by.id('emailAddress'));
    let password = element(by.id('password'));
    let registrationConsent = element(by.id('registrationConsent'));
    let promoConsent = element(by.id('promotionalConsent'));
    let submit = element(by.css('#registration-form > button'));


    this.clickBtn = () => {
        btn.click();
        registerBtn.click();
    }

    this.registerPageValidate = () => {
        browser.sleep(3000)
        let expected_title2 = 'Registration | Seabourn';
        let title = browser.getTitle();
        title.then((result) => {
            expect(result).toEqual(expected_title2);
            console.log(result);
        });
        browser.sleep(3000)
    };


    this.registration = () => {
        
        firstName.sendKeys(`Adam${creds.randomStr()}`);
        lastName.sendKeys(`Smith${creds.randomStr()}`);
        month.click();
        birthDay.sendKeys(creds.randomNum2(10, 31).toString());
        birthYear.sendKeys(creds.randomNum2(1900, 2000).toString());
        country.click();
        postalCode.sendKeys(creds.randomNum2(1001, 9999).toString());
        email.sendKeys(`adam.smith.${creds.randomNum1(99)}@adamsmith.com`);
        password.sendKeys(`abC${creds.randomNum2(100, 999)}!`);

        browser.executeScript('window.scrollTo(0,2000);').then(() => {
            registrationConsent.click()
        });
       
        promoConsent.click();
        submit.click();
        browser.sleep(5000)

    };

    this.validateRegisteration = () => {
        browser.sleep(3000);
        let expected_title3 = 'My Account | Seabourn';
        let title = browser.getTitle();
        title.then((result) => {
            expect(result).toEqual(expected_title3);
            console.log(result);
        });
        browser.sleep(5000)
    }


};



module.exports = new loginSB();