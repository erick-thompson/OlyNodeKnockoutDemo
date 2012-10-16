var viewModel = {
    firstValue: ko.observable("hello"), // Observable
    secondValue: "hello, again"         // Not observable
};
ko.applyBindings(viewModel);