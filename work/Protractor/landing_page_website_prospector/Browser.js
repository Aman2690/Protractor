var Browser = function(){
    var loginURL = 'https://qa-tomcat9.ez-touch.net/acton/account/login.jsp';
    this._get = function(){
        browser.get(loginURL);
    };

    this._nonAngular = function(){
        isAngularSite(false);
    };

    this.angular = function(){
        isAngularSite(true);
    };
};
module.exports = new Browser();