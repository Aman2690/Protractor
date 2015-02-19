var LoginPage = function(){
    isAngularSite(false);
    this.email = element(by.name('email'));
    this.password = element(by.name('password'));
    this.loginButton = element(by.id('loginbutton'));

    this.login = function(eml,pwd){
        this.email.sendKeys(eml);
        this.password.sendKeys(pwd);
        this.loginButton.click();
    };

    this.getIndexURL = function(){
        return 'https://qa-tomcat9.ez-touch.net/acton/account/login.jsp';
    };

};

module.exports = new LoginPage();