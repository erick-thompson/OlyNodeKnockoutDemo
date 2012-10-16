define(["knockout", "section"], function (ko, Section) {
    window.ko = ko;
    return function () {
        var self = this;

        this.sections = ko.observableArray([
            new Section("intro"),
            new Section("itis"),
            new Section("isnot"),
            new Section("MVVM"),
            new Section("one", "sample"),
            new Section("bindings"),
            new Section("extensibility"),
            new Section("goodenough"),
            new Section("arrays", "sample"),
            new Section("declare", "sample"),
            new Section("tracking", "sample"),
            new Section("templating", "sample"),
            new Section("controlflow", "sample"),
            new Section("formfields", "sample"),
            new Section("bye")
        ]);

        this.sections()[0].prettyName = "Intro";
        this.sections()[1].prettyName = "What it is";
        this.sections()[2].prettyName = "What it is not";
        this.sections()[3].prettyName = "MVVM";
        this.sections()[4].prettyName = "Basic";
        this.sections()[5].prettyName = "Bindings";
        this.sections()[6].prettyName = "Extensibility";
        this.sections()[7].prettyName = "Good Enough";
        this.sections()[8].prettyName = "Arrays";
        this.sections()[9].prettyName = "Declare";
        this.sections()[10].prettyName = "Tracking";
        this.sections()[11].prettyName = "Templating";
        this.sections()[12].prettyName = "Control Flow";
        this.sections()[13].prettyName = "Form Fields";
        this.sections()[14].prettyName = "Fin";

        this.updateSection = function (name) {
            var newIndex, i, length, sections = self.sections();

            for (i = 0, length = sections.length; i < length; i++) {
                if (sections[i].name === name) {
                    newIndex = i;
                    break;
                }
            }

            self.index(newIndex === undefined ? 0 : newIndex);
        };

        this.index = ko.observable(0);
        this.currentSection = ko.computed(function () {
            var newSection = self.sections()[self.index()];
            newSection.activate();
            return newSection;
        });

        //go forward unless we are at the end
        this.goNext = function () {
            var index = self.index(),
                newIndex = (index === self.sections().length - 1) ? index : index + 1;

            location.hash = self.sections()[newIndex].name;
        };

        //go back unless we are at the beginning
        this.goPrevious = function () {
            var index = self.index(),
                newIndex = index ? index - 1 : index;

            location.hash = self.sections()[newIndex].name;
        };

        //if the current page has steps, then go forward
        this.stepNext = function () {
            var data = this.currentSection().data();
            if (data.next) {
                return data.next.call(data);
            }
        };

        //if the current page has steps, then go back
        this.stepPrevious = function () {
            var data = this.currentSection().data();
            if (data.previous) {
                return data.previous.call(data);
            }
        };
    };
});