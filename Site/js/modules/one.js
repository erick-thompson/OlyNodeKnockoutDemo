define(["knockout", "sample"], function (ko, Sample) {
    return new Sample("Basics", "one", [
        new Sample.State("Observable", "observables", { forceLoad: true }),
        new Sample.State("Observable Array", "observableArrays", { forceLoad: true }),
        new Sample.State("Events", "click", { forceLoad: false }),
        new Sample.State("Multiple Models", "childVM", { forceLoad: false }),
        new Sample.State("Computed Observable", "computedObservable", { forceLoad: false }),
    ]);
});