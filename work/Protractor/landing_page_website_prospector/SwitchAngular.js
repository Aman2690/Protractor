var SwitchAngular = function(){
    isAngularSite(false);
    this.go = function(){
        browser.driver.sleep(4000);
        this.Beta = element(by.xpath("html/body/div[1]"));
        this.Beta.click();
        browser.switchTo().alert().accept();
        browser.waitForAngular();
    };

    this.getAngularURL = function(){
        return 'http://qa-tomcat9.ez-touch.net/acton/ng-ui/#/dashboard';
    };
};

module.exports = new SwitchAngular();