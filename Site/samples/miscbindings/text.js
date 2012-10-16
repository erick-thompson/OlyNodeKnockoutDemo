var viewModel = function() {
    this.myMessage = ko.observable(); // Initially blank
};

var vm = new viewModel();

vm.myMessage("Hello, world!"); // Text appears
ko.applyBindings(vm);