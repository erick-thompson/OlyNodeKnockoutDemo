define(["knockout"], function(ko) {
    return function() {
        this.title = "90/10";
        this.allPoints = [
            { title: "Actions: click, submit" },
            { title: "Appearance: visible, css, style, hasFocus, etc." },
            { title: "Control flow: if, ifnot, foreach, etc." },
            { title: "Input control: enable, " },
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