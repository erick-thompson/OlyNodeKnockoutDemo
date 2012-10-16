var VisibleViewModel = function() {
	shouldShowMessage = ko.observable(false);
};
var vm = new VisibleViewModel();
ko.applyBindings(vm);
