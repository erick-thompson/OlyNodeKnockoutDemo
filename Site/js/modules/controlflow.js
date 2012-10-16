define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Control Flow", "controlflow", [
        new Sample.State("The foreach binding: array","foreach-1"),
        new Sample.State("The foreach binding: add/remove","foreach-2"),
        new Sample.State("The foreach binding: $data","foreach-3"),
        new Sample.State("The 'if' binding","if-1"),
        new Sample.State("The 'if' binding","if-2"),
        new Sample.State("The 'with' binding","with-1"),
        new Sample.State("The 'with' binding","with-2")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});