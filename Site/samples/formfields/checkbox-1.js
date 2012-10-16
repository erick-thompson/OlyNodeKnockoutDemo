var viewModel = {
    wantsSpam: ko.observable(true) // Initially checked
};
 
// ... then later ...
viewModel.wantsSpam(false); // The checkbox becomes unchecked
ko.applyBindings(viewModel);