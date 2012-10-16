var viewModel = {
    availableCountries : ko.observableArray(['France', 'Germany', 'Spain']) // These are the initial options
};
 
// ... then later ...
viewModel.availableCountries.push('China'); // Adds another option
ko.applyBindings(viewModel);