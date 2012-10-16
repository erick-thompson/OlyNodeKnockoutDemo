//Note alternate way to create a view model. This is json format
var viewModel = {
    details: ko.observable() // Initially blank
};
viewModel.details("<em>For further details, view the report <a href='report.html'>here</a>.</em>"); // HTML content appears 
ko.applyBindings(viewModel);