define(["knockout"], function(ko) {
    return function() {
        this.title = "What Knockout is not";
        this.allPoints = [
            { title: "UI library with widgets" },
            { title: "Collection of utilities" },
            { title: "Transparent library" },
            { title: "Magic bullet" },
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