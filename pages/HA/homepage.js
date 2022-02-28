let homepageHA = function () {
    let loginRegisterBtn = element(by.id("GlobalHeaderLoginWidgetDropDownButton"));
    let loginBtn = element(by.xpath("//*[@id=\"GlobalHeaderLoginContainer\"]/a/span"));


    this.angular = () => {
        browser.waitForAngularEnabled(false);
    };

    this.get = () => {
        let url = 'https://www.hollandamerica.com/en_US.html';
        browser.get(url);
    };

    this.hollandAmericaValidate = () => {
        let expected_title = 'Cruises, Cruise Ship Deals, Travel Cruises | Holland America';
        let title = browser.getTitle();
        title.then((result) => {
            expect(result).toEqual(expected_title);
            console.log(result);

        });
    };
};

module.exports = new homepageHA();
