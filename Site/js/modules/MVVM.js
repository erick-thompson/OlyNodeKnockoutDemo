define(["knockout"], function(ko) {
    return function() {
        this.title = "Model View ViewModel (MVVM)";

        this.allimgs = [
            { path: "MVVM1.png" },
            { path: "MVVM2.png" },
            { path: "MVVM3.png" },
        ];

        this.images = ko.observableArray();

        //add the top point to the list of displayed points
        this.next = function() {
            if (this.allimgs.length) {
                this.images.push(this.allimgs.shift());
            }
        };

        //step back
        this.previous = function() {
            if (this.images().length) {
                this.allimgs.unshift(this.images.pop());
            }
        };
    };
});