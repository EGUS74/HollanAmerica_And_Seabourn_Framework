let homepageSB = function () {
    let loginRegisterBtn = element(by.id("GlobalHeaderLoginWidgetDropDownButton"));
    let loginBtn = element(by.xpath("//*[@id=\"GlobalHeaderLoginContainer\"]/a/span"));


    this.angular = () => {
        browser.waitForAngularEnabled(false);
    };


    this.get = () => {
        let url = 'https://www.seabourn.com/en_US.html'
        browser.get(url);
    };


    this.seabournValidate = () => {
        let expected_title = 'Luxury Cruises & Luxury Cruise Vacations | Seabourn';
        let title = browser.getTitle();
        title.then((result) => {
            expect(result).toEqual(expected_title);
            console.log(result);

        });
    };
};

module.exports = new homepageSB();
