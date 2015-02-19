var menu = function(){

    //master Functions
    this.open = function(value){
        if(value == "New Message"){
            this.outboundClick();
            this.newMessageClick();
        }

        else if(value == "Website Prospector"){
            this.inboundClick();
            this.websiteProspector();
        }

    };

    this.getWebsiteProspectorURL = function(){
        return 'http://qa-tomcat9.ez-touch.net/acton/ng-ui/#/if/beacon/beaconActivity.jsp';
    };

    //Slave functions
    this.outboundClick = function(){
        isAngularSite(true);
        browser.driver.sleep(2000);
        element(by.xpath('html/body/aside/span/nav/ul/li[6]/a/span/span')).click();   //clicks Outbound from left panel
    };

    this.inboundClick = function(){
        isAngularSite(true);
        browser.driver.sleep(2000);
        element(by.xpath(".//*[@id='left-panel']/span/nav/ul/li[5]/a/span/span")).click();   //clicks Inbound from left panel
    };

    this.newMessageClick = function(){
        browser.driver.sleep(2000)
        element(by.xpath('html/body/aside/span/nav/ul/li[6]/ul/li[1]/a/span[1]/span')).click();
        browser.driver.sleep(2000);
    };

    this.websiteProspector = function(){
        browser.driver.sleep(2000)
        element(by.xpath(".//*[@id='left-panel']/span/nav/ul/li[5]/ul/li[1]/a/span[1]/span")).click();
        browser.driver.sleep(2000);
    };
};

module.exports = new menu();