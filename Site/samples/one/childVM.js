var ViewModel = function () {
    finishedGames = ko.observableArray([
        new Game('Tue', false),
        new Game('Wed', false),
        new Game('Thurs', false),
        new Game('Fri', true),
    ]);
};

var Game = function (name, winner) {
    this.name = ko.observable(name);
    this.winner = ko.observable(winner);

    this.toggleWin = function () {
        winner(!winner());
    };
};

ko.applyBindings(new ViewModel());