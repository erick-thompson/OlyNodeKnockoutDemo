define(["knockout"], function (ko) {
    return function () {
        this.title = "What is Knockout?";
        this.allPoints = [
            { title: "JavaScript library for rich data binding" },
            { title: "Focused on the client" },
            { title: "Fits best with applications that use the MVVM pattern" },
            { title: "Especially useful for RIA/single page applications" },
            { title: "A library that plays well with others" },
            { title: "Active development with an active user community" },
            { title: "There are a wide vareity of plug-ins and extensions" },
        ];

        this.points = ko.observableArray();

        //add the top point to the list of displayed points
        this.next = function () {
            if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
            }
        };

        //step back
        this.previous = function () {
            if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
            }
        };
    };
});