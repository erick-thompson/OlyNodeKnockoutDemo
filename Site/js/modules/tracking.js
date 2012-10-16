define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Dependency Tracking", "tracking", [
        new Sample.State("Hello World","helloworld"),
        new Sample.State("Working with observable arrays","arrays"),
        new Sample.State("A value converter","valueconverter"),
        new Sample.State("Filtering and validating user input","filtering"),
        new Sample.State("Subscribing to a change","subscribe")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});