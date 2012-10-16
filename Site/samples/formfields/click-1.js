var viewModel = {
    numberOfClicks : ko.observable(0),
    incrementClickCounter : function() {
        var previousCount = this.numberOfClicks();
        this.numberOfClicks(previousCount + 1);
    }
};

ko.applyBindings(viewModel);