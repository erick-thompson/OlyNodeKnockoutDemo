define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Declarative Bindings", "declare", [
        new Sample.State("Textbox Example","textbox"),
        new Sample.State("Dropdown Example","dropdown")
    ], true);  //this last true tells it to load each sample immediately when moving to it

});