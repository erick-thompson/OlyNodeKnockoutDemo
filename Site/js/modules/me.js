define(["knockout"], function(ko) {
    return function() {
        this.title = "About me";
        this.allPoints = [
            { title: "Not a JavaScript expert" },
            { title: "Not a node expert" },
            { title: "C# is my native tongue" },
            { title: "Experience from top to bottom of stacks" },
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