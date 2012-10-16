var ViewModel = function () {
    finishedGames = ko.observableArray([
        { name: 'Tue', winner: ko.observable(false) },
        { name: 'Wed', winner: ko.observable(false) },
        { name: 'Thurs', winner: ko.observable(false) },
        { name: 'Fri', winner: ko.observable(true) }
    ]);

    toggleWin = function (game) {
        game.winner(!game.winner());
    };
};

ko.applyBindings(new ViewModel());