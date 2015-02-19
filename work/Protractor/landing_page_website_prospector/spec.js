describe('Visit Landing Page and check website prospector counters', function(){
    'use strict';
    var LoginPage = require('./LoginPage.js');
    var SwitchAngular = require('./SwitchAngular.js');
    var Menu = require('./menu.js');
    var Browser = require('./Browser.js');
    var Counters = require('./counters.js');
    var c1 = [];
    var c2 = [];

    it('Logins', function(){
        Browser._get();
        LoginPage.login('gautam.khot@act-on.net','abc!!123');
        var IndexURL = LoginPage.getIndexURL();
        expect(browser.getCurrentUrl()).toEqual(IndexURL);
    });

    it('Switches to Angular', function(){
        SwitchAngular.go();
        var AngularURL = SwitchAngular.getAngularURL();
        expect(browser.getCurrentUrl()).toEqual(AngularURL);
    });

    it('Click Website Prospector', function(){
        Menu.open("Website Prospector");
        var websiteProspectorURL = Menu.getWebsiteProspectorURL();
        expect(browser.getCurrentUrl()).toEqual(websiteProspectorURL);
    });



    it('Collects counter values', function(){
        c1[0] = Counters.getCounter("Known Prospects");
        c1[1] = Counters.getCounter("Anonymous Visitors");
        c1[2] = Counters.getCounter("Companies");
    });

    it('Opens a new instance of browser',function(){
        var newBrowser = browser.forkNewDriverInstance();
        newBrowser.ignoreSynchronization = true;
        newBrowser.get('http://test9.ez-touch.net/acton/fs/blocks/showLandingPage/a/2069/p/p-0022/t/page/fm/0');
        newBrowser.driver.sleep(2000);
        newBrowser.driver.switchTo().alert().accept();
        newBrowser.refresh();
        newBrowser.driver.sleep(2000);
        expect(newBrowser.getCurrentUrl()).toEqual('http://test9.ez-touch.net/acton/fs/blocks/showLandingPage/a/2069/p/p-0022/t/page/fm/0');
    });

    it('Reloads page and collects counter again',function(){
        browser.refresh();
        browser.driver.sleep(4000);
        c2[0] = Counters.getCounter("Known Prospects");
        c2[1] = Counters.getCounter("Anonymous Visitors");
        c2[2] = Counters.getCounter("Companies");
        expect(c2[0]).toEqual(c1[0]);
        expect(c2[1]).toNotEqual(c1[1]);
        expect(c2[2]).toEqual(c1[2]);
    });

});