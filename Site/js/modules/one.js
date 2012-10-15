define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Basics", "one", [
        new Sample.State("Observable","observables", { forceLoad: true }),
        new Sample.State("Observable Array","observableArrays", { forceLoad: true }),
        new Sample.State("Observable Array","childVM", { forceLoad: false }),
        new Sample.State("Computed Observable","computedObservable", { forceLoad: false }),
        new Sample.State("Hide output and HTML", "just-js", { hideResult: true, hideHtml: true }),
        new Sample.State("Load some JS/HTML not as code sample", "not-sample", { loadAsSection: true }),
        new Sample.State("More code", "more"),
        new Sample.State("More code", "more2")
    ]);  //this last true tells it to load each sample immediately when moving to it

});