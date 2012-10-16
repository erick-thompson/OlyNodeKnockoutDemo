function MyViewModel() {
    this.price = ko.observable(25.99);
         
    this.formattedPrice = ko.computed({
        read: function () {
            return '$' + this.price().toFixed(2);
        },
        write: function (value) {
            value = parseFloat(value.replace(/[^\.\d]/g, ""));
            this.price(isNaN(value) ? 0 : value); // Write to underlying storage
        },
        owner: this
    });
}
ko.applyBindings(new MyViewModel());