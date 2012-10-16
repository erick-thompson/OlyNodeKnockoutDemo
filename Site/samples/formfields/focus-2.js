function PersonViewModel(name) {
    this.name = ko.observable(name);
    this.editing = ko.observable(false);
         
    this.edit = function() { this.editing(true) }
}
ko.applyBindings(new PersonViewModel("Bert Bertington"));