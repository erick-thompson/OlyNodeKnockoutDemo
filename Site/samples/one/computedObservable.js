var ViewModel = function () {
    finishedGames = ko.observableArray([
        new Game('Tue', false),
        new Game('Wed', false),
        new Game('Thurs', false),
        new Game('Fri', true),
    ]);

    advice = ko.computed(function () {
        var wins = 0;
        var games = this.finishedGames();
        for (var i=0;i<games.length;i++) {
            if (games[i].winner() === true)
                wins++;
        }

        if (wins > 0) {
            return "doing ok";
        } else {
            return "maybe you should try a different game"
        }
    });
};

var Game = function (name, winner) {
    this.name = ko.observable(name);
    this.winner = ko.observable(winner);

    this.toggleWin = function () {
        winner.winner(!winner.winner());
    };
};

ko.applyBindings(new ViewModel());