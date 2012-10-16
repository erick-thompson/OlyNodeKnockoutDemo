var cssViewModel = function() {
    this.currentProfit = ko.observable(1500); // Positive value, so initially we don't apply the "profitWarning" class
};

var vm = new cssViewModel();
vm.currentProfit(-50); // Causes the "profitWarning" class to be applied
ko.applyBindings(vm);