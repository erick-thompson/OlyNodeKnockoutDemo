function PersonViewModel(name) {
    // Data
    this.name = ko.observable(name);
    this.editing = ko.observable(false);
         
    // Behaviors
    this.edit = function() { this.editing(true) }
}
ko.applyBindings(new PersonViewModel("Bert Bertington"));