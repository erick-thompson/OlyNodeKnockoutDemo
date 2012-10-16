var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);

    this.fullName.subscribe(function(newValue) {
        alert(newValue);
    });

};


ko.applyBindings(new ViewModel("Planet", "Earth"));