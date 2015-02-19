var request = require('request');
var synchronized_http = function(){
    this.geturl = function(url){
        return get(url);
    };

    function get(url) {
        var jar = request.jar();
        var req = request.defaults({
            jar : jar
        });
        var defer = protractor.promise.defer();
        console.log("Calling", url);
        req.get(url,  function(error, message) {
            console.log("Done call to", url);
            if (error || message.statusCode >= 400) {
                defer.reject({
                    error : error,
                    message : message
                });
            } else {
                defer.fulfill(message);
            }
        });
        return defer.promise;
    }
};

module.exports = new synchronized_http();