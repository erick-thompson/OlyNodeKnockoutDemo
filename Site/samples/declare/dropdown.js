function TicketsViewModel() {
    this.tickets = [
        { name: "Economy", price: 199.95 },
        { name: "Business", price: 449.22 },
        { name: "First Class", price: 1199.99 }
    ];
    this.chosenTicket = ko.observable();
    this.resetTicket = function() { this.chosenTicket(null) }
}
ko.applyBindings(new TicketsViewModel());