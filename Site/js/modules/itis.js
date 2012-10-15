define(["knockout"], function(ko) {
    return function() {
        this.title = "What Knockout is";
        this.allPoints = [
            { title: "JavaScript library for rich data binding" },
            { title: "Focuses on the client side of an application" },
            { title: "Fits best with applications that use the MVVM pattern" },
            { title: "Mainly useful for RIA/single page applications" },
            { title: "A library that plays well with others" },
        ];

        this.points = ko.observableArray();

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.allPoints.length) {
                this.points.push(this.allPoints.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.points().length) {
                this.allPoints.unshift(this.points.pop());
            }
        };
    };
});