define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Dependency Tracking", "bindings", [
        new Sample.State("the visible binding","visible"),
        new Sample.State("the text binding","text"),
        new Sample.State("the html binding","html"),
        new Sample.State("the css binding","css"),
        new Sample.State("the style binding","style"),
        new Sample.State("the attr binding","attr")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});