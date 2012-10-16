var viewModel = {
    currentProfit: ko.observable(150000) // Positive value, so initially black
};
viewModel.currentProfit(-50); // Causes the DIV's contents to go red
ko.applyBindings(viewModel);