var viewModel = {
    someValue: ko.observable("edit me")
};
ko.applyBindings(viewModel);
/*
"keyup" - updates your view model when the user releases a key
"keypress" - updates your view model when the user has typed a key. Unlike keyup, this updates repeatedly while the user holds a key down
"afterkeydown" - updates your view model as soon as the user begins typing a character. This works by catching the browser’s keydown event and handling the event asynchronously.

*/