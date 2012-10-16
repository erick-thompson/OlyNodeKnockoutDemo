define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Form Fields", "formfields", [
        new Sample.State("The click binding","click-1"),
        new Sample.State("The click binding","click-2"),
        new Sample.State("The enable binding","enable-1"),
        new Sample.State("The value binding","value-1"),
        new Sample.State("The value binding","value-2"),
        new Sample.State("The value binding","value-3"),
        new Sample.State("The focus binding","focus-1"),
        new Sample.State("The focus binding","focus-2"),
        new Sample.State("The checkbox binding","checkbox-1"),
        new Sample.State("The checkbox binding adding checkboxes bound to an array","checkbox-2"),
        new Sample.State("The checkbox binding adding radio buttons","checkbox-3"),
        new Sample.State("The options binding Drop-down","options-1"),
        new Sample.State("The options binding Multi-select","options-2"),
        new Sample.State("The options binding JavaScript objects","options-3"),
        new Sample.State("The options binding JavaScript objects","options-4"),
        new Sample.State("The selectedOptions binding","selectoptions-1")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});