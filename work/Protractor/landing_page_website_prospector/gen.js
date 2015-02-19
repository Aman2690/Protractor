var counters = function(){
    this.getWebsiteProspective = function(){
        isAngularSite(false);
        //var array = [];
        var temp1,temp2;
        //var values = new Object();
        browser.driver.sleep(8000);
        browser.switchTo().frame('content');
        /*
        var ele = element(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[2]"));
        ele.getText().then(function(str){
        //values["knownProspects"] = str;
        console.log(str);
        temp = str;
        });
        */
        var ele = element(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[2]"));
        ele.getText().then(function(str){
        temp1 = str;
        });
        //var temp1 = this.getCounters(ele);
        var ele = element(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[3]"));
        ele.getText().then(function(str){
        temp2 = str;
        });
        //values["anonymousVisitors"] = browser.driver.findElement(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[3]")).getText();
        ///values["Companies"] = browser.driver.findElement(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[4]")).getText();
        return [temp1,temp2];
    };

    this.getCounters = function(ele){
        return ele.getText().then(function(value){
            return value;
        });
    };
};

module.exports = new counters();