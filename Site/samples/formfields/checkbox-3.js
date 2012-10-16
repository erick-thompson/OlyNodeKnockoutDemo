var viewModel = {
    wantsSpam: ko.observable(true),
    spamFlavor: ko.observable("almond") // Initially selects only the Almond radio button
};
 
// ... then later ...
viewModel.spamFlavor("msg"); // Now only Monosodium Glutamate is checked
ko.applyBindings(viewModel);