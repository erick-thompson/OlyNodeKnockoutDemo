var ViewModel = function () {
    this.gameName = ko.observable("Fun game");
    this.userName = "Doug";
};

ko.applyBindings(new ViewModel());