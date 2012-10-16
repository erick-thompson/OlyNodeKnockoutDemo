function AppViewModel() {
    var self = this;
    self.twitterName = ko.observable('@joefeser'); 
    self.resultData = ko.observable(); 
 
    self.getTweets = function() {
        twitterApi.getTweetsForUser(self.twitterName(), function(data) {
            self.resultData({
                retrievalDate: new Date(),
                topTweets: data.slice(0, 5)
            });
        });
    }
 
    self.clearResults = function() {
        self.resultData(undefined);
    }
}
 
ko.applyBindings(new AppViewModel());