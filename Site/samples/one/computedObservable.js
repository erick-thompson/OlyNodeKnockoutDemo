var ViewModel = function () {
    this.finishedGames = ko.observableArray([
        { name: 'Tue', winner: ko.observable('not you') },
        { name: 'Wed', winner: ko.observable('not you') },
        { name: 'Thurs', winner: ko.observable('not you') },
        { name: 'Fri', winner: ko.observable('not you') },
    ]);

    advice = ko.computed(function () {
        var wins = util.count(finishedGames, function (g) {
            g.winner === 'you'
        });
        if (wins > 0) {
            return "doing ok";
        } else{
            return "maybe you should try a different game"
        }
    });
};

ko.applyBindings(new ViewModel());