var viewModel = {
    availableCountries : ko.observableArray(['France', 'Germany', 'Spain']),
    chosenCountries : ko.observableArray(['Germany']) // Initially, only Germany is selected
};
 
// ... then later ...
viewModel.chosenCountries.push('France'); // Now France is selected too
ko.applyBindings(viewModel);