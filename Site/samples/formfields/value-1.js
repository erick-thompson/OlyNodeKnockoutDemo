var viewModel = {
    userName: ko.observable(""),        // Initially blank
    userPassword: ko.observable("abc"), // Prepopulate
};
ko.applyBindings(viewModel);