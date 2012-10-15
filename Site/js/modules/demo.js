define(["knockout"], function(ko) {
    return function() {
        this.title = "Demo app";
        this.allPoints = [
            { title: "Scrabble/Words with Friends" },
            { title: "But with less suck" },
            { title: "Today focus on client only" },
            { title: "Real app" },
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