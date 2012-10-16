define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Templating", "templating", [
        new Sample.State("Named","named"),
        new Sample.State("foreach","foreach")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});