var counters = function(){
    this.getCounter = function(value){
        if(value == "Known Prospects"){
            return this.knownProspects();
        }

        else if(value == "Anonymous Visitors"){
            return this.anonymousVisitors();
        }

        else if(value == "Companies"){
            return this.companies();
        }
    };

    this.knownProspects = function(){
        isAngularSite(false);
        browser.driver.sleep(8000);
        browser.switchTo().frame('content');
        var ele = element(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[2]"));
        var temp;
        ele.getText().then(function(val){
            temp = parseInt(val);
        });
        return temp;
    };

    this.anonymousVisitors = function(){
        var ele = element(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[3]"));
        var temp;
        ele.getText().then(function(val){
            temp = parseInt(val);
        });
        return temp;
    };

    this.companies = function(){
        var ele = element(by.xpath(".//*[@id='summaryGoesHere']/table/tbody/tr[1]/td/div/span[4]"));
        var temp;
        ele.getText().then(function(val){
            temp = parseInt(val);
        });
        return temp;
    };

};
module.exports = new counters();