var viewModel = {
    wantsSpam: ko.observable(true),
    spamFlavors: ko.observableArray(["cherry","almond"]) // Initially checks the Cherry and Almond checkboxes
};
 
// ... then later ...
viewModel.spamFlavors.push("msg"); // Now additionally checks the Monosodium Glutamate checkbox
ko.applyBindings(viewModel);