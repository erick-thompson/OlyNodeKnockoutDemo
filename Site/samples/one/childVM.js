var ViewModel = function () {
    finishedGames = ko.observableArray([
        { name: 'Tue', winner: 'not you' },
        { name: 'Wed', winner: 'not you' },
        { name: 'Thurs', winner: 'not you' },
        { name: 'Fri', winner: 'you' }
    ]);
};

var Line = function(name, winner) {
    name = name,
    winner = winner
};

ko.applyBindings(new ViewModel());