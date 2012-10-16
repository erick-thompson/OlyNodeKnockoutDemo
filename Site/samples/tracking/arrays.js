// Here's my data model
var ViewModel = function(first, last) {
    this.firstName = ko.observable(first);
    this.lastName = ko.observable(last);
 
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);

    this.cars = ko.observableArray([]);
};

var vm = new ViewModel("Planet", "Earth");
vm.cars.push({name: "Honda"});
vm.cars.push({name:"Toyota"});

ko.applyBindings(vm);