var ViewModel = function () {
    finishedGames = ko.observableArray([
        { name: 'Tue', winner: false },
        { name: 'Wed', winner: false },
        { name: 'Thurs', winner: false },
        { name: 'Fri', winner: true }
    ]);
};

ko.applyBindings(new ViewModel());