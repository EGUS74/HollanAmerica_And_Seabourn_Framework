let cred = function () {

    this.randomNum1 = (max) => {
        return Math.floor(Math.floor(Math.random() * max));
    };

    this.randomNum2 = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.randomStr = () => {
        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };
}

module.exports = new cred();
